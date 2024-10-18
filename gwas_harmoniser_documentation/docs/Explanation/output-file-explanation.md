---
sidebar_position: 1
---
# Output folder structure explanation
``` text title="random_name"
.
├── 1.merged
├── ......
├── 22.merged
├── final
│   ├── random_name.h.tsv.gz
│   ├── random_name.h.tsv.gz-meta.yaml
│   ├── random_name.h.tsv.gz.tbi
│   └── random_name.running.log
├── harmonization
│   ├── chr1.merged.hm
│   ├── chr1.merged.log.tsv.gz
│   ├── ......
│   ├── chr22.merged.hm
│   └── chr22.merged.log.tsv.gz
├── qc
│   ├── harmonised.qc.tsv
│   ├── harmonised.tsv
│   └── report.txt
├── random_name.tsv-meta.yaml
├── ten_percent_total_strand_count.tsv
├── ten_sc
│   ├── ten_percent_chr1.sc
│   └── ......
│   └── ten_percent_chr22.sc
└── unmapped
```
Files:
- `chr1.merged`
- `unmapped`
- `ten_percent_total_strand_count.tsv`
- `random_name.tsv-meta.yaml`

Folders:
- `ten_sc`
   - `ten_percent_chr1.sc`
- `harmonization`
   - `chr1.merged.hm`
   - `chr1.merged.log.tsv.gz`
- `qc`
   - `harmonised.tsv`
   - `harmonised.qc.tsv`
   - `report.txt`
- `final`
   - `random_name.h.tsv.gz`
   - `random_name.h.tsv.gz-meta.yaml`
   - `random_name.h.tsv.gz.tbi`
   - `random_name.running.log`