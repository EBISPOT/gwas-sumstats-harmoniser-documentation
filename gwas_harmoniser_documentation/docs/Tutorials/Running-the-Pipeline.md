---
sidebar_position: 5
---
# Harmonising a single sumstat
---
Below is an example of how to run the pipeline using SLURM for job scheduling:

``` bash title="start_harmonisation.sh"
#!/bin/bash
#SBATCH --time=2-00:00:00        # Job time allocation (2 days)
#SBATCH --mem=5G                 # Memory allocation (5GB)
#SBATCH -J harmonsation          # Job name
#SBATCH --output=$path/harm.out  # Standard output file
#SBATCH --output=$path/harm.err  # Error log file

# Define the reference path
ref_path="full path to store reference"

# Harmonising single sumstat using Singularity
nextflow run  EBISPOT/gwas-sumstats-harmoniser \
--ref $ref_path \
--version 'v1.1.9' \
--harm \
--file Full_path_of_the_file_to_be_harmonised
-profile cluster,singularity
```
Parameters Explained:
| Parameter         | Description                                                                                                   |
|-------------------|---------------------------------------------------------------------------------------------------------------|
| `--ref`           | Specifies the path where reference files are stored.                                                         |
| `--harm`          | Executes the harmonization model to harmonize the summary statistics based on the reference.                 |
| `--file`          | Specifies the full path of the summary statistics file to be harmonized.                                     |
| `--chrom`         | Runs the pipeline for a specific chromosome.                                                                  |
| `--chromlist`     | Runs the pipeline for multiple chromosomes.                                                                   |
| `--to_build`      | Specifies the target genome build; the default value is "38" (GRCh38).                                      |
| `--threshold`     | Defines the threshold for strand consensus. Default value is 0.99. For all variants, if either the forward ratio or reverse ratio exceeds **0.99**, palindromic variants will be evaluated as forward (or reverse). |
| `-profile`        | Instructs Nextflow to run the pipeline in a cluster environment using Singularity.                           |

The pipeline also support other [nextflow CLI options](https://www.nextflow.io/docs/latest/reference/cli.html), such as:
* `-resume`: Executes the script using cached results, allowing you to continue from where the previous execution stopped (e.g., after an error).
* `-with-trace`: Generates a workflow execution trace file for tracking pipeline performance.

<details>
    <summary> Why only 5GB memory is required here </summary>
    
    In Nextflow, the pipeline is made by joining together different processes. The job defined in the `start_harmonisation.sh` script is the initial step to start the pipeline and requires a small amount of memory.
    
    Nextflow manages the execution of each process and allocates the corresponding memory and wall time as specified in the `config/basic.config` file. For example, the map_to_build step, which performs [genome build mapping](../Introduction/Genome-Build-Mapping.md) step, requires 28GB of memory to complete.
    
    Additionally, if a process exits with a status code between 130 and 145, inclusive, or is equal to 104, Nextflow will automatically retry that process up to 5 times, allocating additional memory with each attempt. If it continues to fail due to these exit statuses, you can modify the resource requirements in the configuration file to accommodate the necessary resources.

    <details>
       <summary>resources required in the `Genome Build Mapping` step</summary>
        ```config title="config/basic.config"
        withName:map_to_build {
                memory = { 28.GB * task.attempt }
                time   = { 5.h  * task.attempt }
                publishDir =[ 
                    path:{"${launchDir}/$GCST"},
                    mode: 'copy'
                    ]
            }
        ```
    </details>
</details>


    