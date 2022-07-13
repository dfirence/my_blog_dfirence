# Search Terms Glossary

This article describes the search glossary of terms that can be used in the **Mitre-Assistant** utility.  If you want to explore these in detail, reference the `Search Usage` article.

<br />

## Base Terms

<br />

| Term | Example | CSV | JSON | Details |
|------|---------|-----|------|---------|
| {{ deprecated }}| **search -m enterprise -t "deprecated"**| yes | yes||
| {{ revoked }}| **search -m enterprise -t "revoked"**| yes | yes||
| {{ nosub }}| **search -m enterprise -t "nosub"**| yes | yes||
| {{ overlap }} | **search -m enterprise -t "overlap"** | yes | yes ||
| {{ nodatasources }}| **search -m enterprise -t "nodatasources"**| yes | yes||
| {{ data_source_name }}| **search -m enterprise -t "wmi-creation"**| yes | yes||
| {{ platform }}| **search -m enterprise -t "windows"**| yes | yes||
| {{ tactic }}| **search -m enterprise -t "persistence"**| yes | yes||
| {{ technique_id }}| **search -m enterprise -t "t1480"**| yes | yes||
| {{ sub_technique_id }}| **search -m enterprise -t "t1480.001"**| yes | yes||
| {{ adversary_name }}| **search -m enterprise -t "apt1"**| yes | yes||
| {{ malware_name }}| **search -m enterprise -t "poisonivy"**| yes | yes||
| {{ tool_name }}| **search -m enterprise -t "mimikatz"**| yes | yes||

<br />

## Stats Terms

<br />

| Term | Example | CSV | JSON | Details |
|------|---------|-----|------|---------|
| {{ stats:platform }}| **search -m enterprise -t "stats:platforms"**| yes | yes||
| {{ stats:tactics }}| **search -m enterprise -t "stats:tactics"**| yes | yes||
| {{ stats:techniques }}| **search -m enterprise -t "stats:techniques"**| yes | yes||
| {{ stats:subtechniques }}| **search -m enterprise -t "stats:subtechniques"**| yes | yes||
| {{ stats:datasources }}| **search -m enterprise -t "stats:datasources"**| yes | yes||
| {{ stats:adversaries }}| **search -m enterprise -t "stats:adversaries"**| yes | yes||
| {{ stats:malware }}| **search -m enterprise -t "stats:malware"**| yes | yes||
| {{ stats:tools }}| **search -m enterprise -t "stats:tools"**| yes | yes||

<br />

## Wildcard Terms

<br />

| Term | Example | CSV | JSON | Details |
|------|---------|-----|------|---------|
| {{ technique_name }}| **search -m enterprise -t "exploit"** | yes | yes | |
| {{ technique_description }}| **search -m enterprise -t "exploit" -d** | yes | yes | |

<br />

## Correlation Terms

| Term | Example | CSV | JSON | Details |
|------|---------|-----|------|---------|
| {{ adversary_name }}| **search -m enterprise -t "apt1" -c**| yes | yes||
| {{ malware_name }}| **search -m enterprise -t "poisonivy" -c**| yes | yes||
| {{ tool_name }}| **search -m enterprise -t "psexec" -c**| yes | yes||

<br />