---
sidebar_position: 2
---

# Genome Build Mapping

The first step is lifting variants to the desired genome assembly (GRCh38). The pipeline employs the following steps:

### Step 1: Mapping by rsID using Ensembl (v95)
 Whenever possible, the base pair location is updated by mapping the variant's rsID using the Ensembl database. If this method is successful, the field `hm_coordinate_conversion` is set to 'rs', indicating that the base pair location was derived from Ensembl’s reference variant database.

### Step 2: Liftover to the latest genome build
 If the rsID mapping is not possible, the variant’s position is lifted over from the older genome build to GRCh38 using the tool LiftOver. In this case, the field `hm_coordinate_conversion` is set to 'lo', indicating that the base pair location was converted by lifting the coordinates.
 
### Step 3: Variant removal
 If neither rsID mapping nor liftover is successful, the variant is removed from the file. This ensures that only high-confidence variants with validated genomic positions are retained in the final dataset.

This process is recorded in the `hm_coordinate_conversion` field in the harmonised data file to provide traceability for how each variant's genomic position was determined. 