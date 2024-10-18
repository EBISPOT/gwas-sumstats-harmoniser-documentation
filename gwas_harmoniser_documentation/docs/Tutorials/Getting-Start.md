---
sidebar_position: 1
---
# Getting Start

## Install necessary dependencies

:::warning
To successfully run the `gwas-sumstats-harmoniser`, it is crucial to have the following dependencies installed:

* Linux or macOS
* HTSlib for tabix
* Nextflow
* Docker, Singularity, or Anaconda
:::

1. Install [HTSlib](https://www.htslib.org/download/)
```bash
wget https://github.com/samtools/htslib/releases/download/1.21/htslib-1.21.tar.bz2
cd htslib-1.21
./configure --prefix=/where/to/install
make
make install
export PATH=/where/to/install/bin:$PATH 
```
* Confirm the `htslib` installation by
```text
$ tabix

Version: 1.9
Usage:   tabix [OPTIONS] [FILE] [REGION [...]]
```

2. Install [Nextflow](https://www.nextflow.io/docs/latest/install.html)
```bash
java -version # Java v8+ required
# openjdk 11.0.13 2021-10-19
curl -fsSL get.nextflow.io | bash
chmod +x nextflow
mv nextflow ~/bin/
```
* Confirm the the `nextflow` installation by
```text 
$ nextflow info

Version: 24.04.2 build 5914
Created: 29-05-2024 06:19 UTC (07:19 BST)
System: Linux 4.18.0-513.24.1.el8_9.x86_64
Runtime: Groovy 4.0.21 on Java HotSpot(TM) 64-Bit Server VM 17.0.4.1+1-LTS-2
Encoding: UTF-8 (UTF-8)
```

3. Next, install [Singularity](https://docs.sylabs.io/guides/3.0/user-guide/installation.html), [Docker](https://docs.docker.com/engine/install/) or [Anaconda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html). Note that using Singularity or Docker is recommended.

* Before starting the installation, it's a good idea to check if any of these tools are already installed on your system:
```text
$ singularity --version
singularity-ce version 4.1.4-1.el8

$ docker --version
Docker version 27.2.0, build 3ab4256

$ conda --version
conda 23.11.0
```

## Run your first harmonisation pipeline
To run your first harmonization pipeline, execute the following command:
``` bash
nextflow run  EBISPOT/gwas-sumstats-harmoniser -profile test,singularity
```
🚨 If you did not choose to install Singularity, remember to replace `singularity` with `docker` or `conda`.

Once Nextflow starts running:
1. It will download the `gwas-sumstats-harmoniser` pipeline from Github into the global cache `~/.nextflow/assets`. 
2. It will pull the Docker image from [Docker Hub](https://hub.docker.com/r/ebispot/gwas-sumstats-harmoniser) and built Singularity container.
3. Using the input files `random_name.tsv`,`random_name.tsv-meta.yaml`  along with a small test reference file provided in the ` ~/.nextflow/assets/EBISPOT/gwas-sumstats-harmoniser/test_data`, it will execute the pipeline.
4. Once the pipeline executes, you can monitor the progress in the terminal, which may look like this:
``` bash
 N E X T F L O W   ~  version 24.04.2

Launching `EBISPOT/gwas-sumstats-harmoniser` [goofy_tuckerman] DSL2 - revision: 118e098430

Harmonizing the file ~/.nextflow/assets/EBISPOT/gwas-sumstats-harmoniser/test_data/random_name.tsv
executor >  local (9)
[ec/f4716a] NFC…ATALOGHARM:major_direction:map_to_build (random_name) | 1 of 1 ✔
[7b/52d159] NFC…HARM:major_direction:ten_percent_counts (random_name) | 2 of 2 ✔
[9a/a0478c] NFC…:major_direction:ten_percent_counts_sum (random_name) | 1 of 1 ✔
[-        ] NFC…WASCATALOGHARM:major_direction:generate_strand_counts -
[-        ] NFC…ASCATALOGHARM:major_direction:summarise_strand_counts -
[71/6c263a] NFC…GWASCATALOGHARM:main_harm:harmonization (random_name) | 2 of 2 ✔
[77/e0224e] NFC…OGHARM:main_harm:concatenate_chr_splits (random_name) | 1 of 1 ✔
[6f/9db381] NFC…HARM:GWASCATALOGHARM:quality_control:qc (random_name) | 1 of 1 ✔
[c7/5c00d2] NFC…GHARM:quality_control:harmonization_log (random_name) | 1 of 1 ✔
[chr1, chr22,  is being harmonized]
```

In your current directory, you will find a folder named `random_name` that contains all intermediate files and the final result.

```text
./random_name/
├── 1.merged
├── 22.merged
├── final
│   ├── harmonised.qc.tsv
│   ├── harmonised.tsv
│   ├── random_name.h.tsv.gz (Final output)
│   ├── random_name.h.tsv.gz-meta.yaml (Final output)
│   ├── random_name.h.tsv.gz.tbi (Final output)
│   ├── random_name.running.log (Final output)
│   └── report.txt
├── harmonization
│   ├── chr1.merged.hm
│   ├── chr1.merged.log.tsv.gz
│   ├── chr22.merged.hm
│   └── chr22.merged.log.tsv.gz
├── random_name.tsv-meta.yaml
├── ten_percent_total_strand_count.tsv
├── ten_sc
│   ├── ten_percent_chr1.sc
│   └── ten_percent_chr22.sc
└── unmapped
```
This output confirms that the pipeline has successfully executed and is ready to process larger real datasets.