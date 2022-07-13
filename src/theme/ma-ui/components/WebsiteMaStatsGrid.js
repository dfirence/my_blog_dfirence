import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const WebsiteMaStatsGrid = ({ statistic, version }) => {
  var d = null;  // Raw Data
  var rows = [];
  switch (statistic) {
    case "tactics":
      if (version === 8) {
        d = require('/datasamples/v8/stats_tactics.json');
      } else  {
        d = require('/datasamples/v9/stats_tactics.json');
      }
      d.forEach((v, i) => {
        rows.push({ 
          index: (i + 1),
          tactic: v.item,
          techniques: v.count_techniques,
          subtechniques: v.count_subtechniques,
          percent_techniques: v.percent_techniques,
          percent_subtechniques: v.percent_subtechniques 
        })
      });
      return(
        <div className="ag-theme-alpine" style={{ height: 640, width: 900 }}>
          <AgGridReact
            rowData={rows}
          >
            <AgGridColumn field="index" width={75}></AgGridColumn>
            <AgGridColumn headerName="Tactics" field="tactic" width={200} sortable={true}></AgGridColumn>
            <AgGridColumn headerName="Techniques" field="techniques" width={140} sortable={true}></AgGridColumn>
            <AgGridColumn headerName="Sub-Techniques" field="subtechniques" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Techniques" field="percent_techniques" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Sub-Techniques" field="percent_subtechniques" width={160}></AgGridColumn>      
          </AgGridReact>
        </div>
      );       
    case "platforms":
      /**
       * Platforms Stats Component
       */
      if (version === 8) {
        d = require('/datasamples/v8/stats_platforms.json');
      } else  {
        d = require('/datasamples/v9/stats_platforms.json');
      }

      d.forEach((v, i) => {
        rows.push({ 
          index: (i + 1),
          platform: v.item,
          techniques: v.count_techniques,
          subtechniques: v.count_subtechniques,
          percent_techniques: v.percent_techniques,
          percent_subtechniques: v.percent_subtechniques 
        })
      });     
      return(
        <div className="ag-theme-alpine" style={{ height: 513, width: 900 }}>
          <AgGridReact
            rowData={rows}
          >
            <AgGridColumn field="index" width={75}></AgGridColumn>
            <AgGridColumn headerName="Platforms" field="platform" width={200} sortable={true}></AgGridColumn>
            <AgGridColumn headerName="Techniques" field="techniques" width={140} sortable={true}></AgGridColumn>
            <AgGridColumn headerName="Sub-Techniques" field="subtechniques" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Techniques" field="percent_techniques" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Sub-Techniques" field="percent_subtechniques" width={160}></AgGridColumn>      
          </AgGridReact>
        </div>
      );
    case "datasources":
      if (version === 8) {
        d = require('/datasamples/v8/stats_tactics.json');
      } else  {
        d = require('/datasamples/v9/stats_datasources.json');
      }
      d.forEach((v, i) => {
        rows.push({ 
          index: (i + 1),
          datasource: v.item,
          techniques: v.count_techniques,
          subtechniques: v.count_subtechniques,
          percent_techniques: v.percent_techniques,
          percent_subtechniques: v.percent_subtechniques 
        })
      });
      return(
        <div className="ag-theme-alpine" style={{ height: 1296, width: 960 }}>
          <AgGridReact
            rowData={rows}
          >
            <AgGridColumn field="index" width={75}></AgGridColumn>
            <AgGridColumn headerName="Data Sources" field="datasource" width={260} sortable={true}></AgGridColumn>
            <AgGridColumn headerName="Techniques" field="techniques" width={140} sortable={true}></AgGridColumn>
            <AgGridColumn headerName="Sub-Techniques" field="subtechniques" width={160} sortable={true}></AgGridColumn>
            <AgGridColumn headerName="% Techniques" field="percent_techniques" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Sub-Techniques" field="percent_subtechniques" width={160}></AgGridColumn>      
          </AgGridReact>
        </div>
      ); 
    case "adversaries":
      if (version === 8) {
        d = require('/datasamples/v8/stats_tactics.json');
      } else  {
        d = require('/datasamples/v9/stats_adversaries.json');
      }
      d.forEach((v, i) => {
        rows.push({ 
          index: (i + 1),
          adversary: v.item,
          tactics: v.count_tactics,
          techniques: v.count_techniques,
          subtechniques: v.count_subtechniques,
          malware: v.count_malware,
          tools: v.count_tools,
          percent_techniques: v.percent_techniques,
          percent_subtechniques: v.percent_subtechniques, 
          percent_tactics: v.percent_tactics,
          percent_malware: v.percent_malware,
          percent_tools: v.percent_tools
        })
      });
      return(
        <div className="ag-theme-alpine"  style={{ height: 1024, width: 1480  }}>
          <AgGridReact
            rowData={rows}
          >
            <AgGridColumn field="index" width={75}></AgGridColumn>
            <AgGridColumn headerName="Adversaries" field="adversary" width={260} sortable={true} filter={true} floatingFilter={true}></AgGridColumn>
            <AgGridColumn headerName="Tactics" field="tactics" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Techniques" field="techniques" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Sub-Techniques" field="subtechniques" width={160} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Malware" field="malware" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Tools" field="tools" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="% Tactics" field="percent_tactics" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Techniques" field="percent_techniques" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Sub-Techniques" field="percent_subtechniques" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Malware" field="percent_malware" width={160}></AgGridColumn>
            <AgGridColumn headerName="% Tools" field="percent_tools" width={160}></AgGridColumn>
          </AgGridReact>
        </div>
      ); 
    case "malware":
      break;
    case "tools":
      break;
    case "techniques":
      if (version === 8) {
        d = require('/datasamples/v8/stats_tactics.json');
      } else  {
        d = require('/datasamples/v9/stats_techniques.json');
      }
      d.forEach((v, i) => {
        rows.push({ 
          index: (i + 1),
          technique: v.item,
          technique_name: v.meta,
          platforms: v.count_platforms,
          tactics: v.count_tactics,
          datasources: v.count_datasources,
          subtechniques: v.count_subtechniques,
          adversaries: v.count_adversaries,
          malware: v.count_malware,
          tools: v.count_tools
        })
      });
      return(
        <div className="ag-theme-alpine" style={{ height: 1024, width: 1480 }}>
          <AgGridReact
            rowData={rows}
          >
            <AgGridColumn field="index" width={75}></AgGridColumn>
            <AgGridColumn headerName="TID" field="technique" width={150} sortable={true} filter={true} floatingFilter={true}></AgGridColumn>
            <AgGridColumn headerName="Technique Name" field="technique_name" width={450} sortable={true} filter={true} floatingFilter={true}></AgGridColumn>
            <AgGridColumn headerName="Platforms" field="platforms" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Data Sources" field="datasources" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Tactics" field="tactics" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Sub-Techniques" field="subtechniques" width={160} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Adversaries" field="adversaries" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Malware" field="malware" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Tools" field="tools" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
          </AgGridReact>
        </div>
      );      
    case "subtechniques":
      if (version === 8) {
        d = require('/datasamples/v8/stats_tactics.json');
      } else  {
        d = require('/datasamples/v9/stats_techniques.json');
      }
      d.forEach((v, i) => {
        rows.push({ 
          index: (i + 1),
          technique: v.item,
          technique_name: v.meta,
          platforms: v.count_platforms,
          tactics: v.count_tactics,
          datasources: v.count_datasources,
          adversaries: v.count_adversaries,
          malware: v.count_malware,
          tools: v.count_tools
        })
      });
      return(
        <div className="ag-theme-alpine" style={{ height: 1024, width: 1480 }}>
          <AgGridReact
            rowData={rows}
          >
            <AgGridColumn field="index" width={75}></AgGridColumn>
            <AgGridColumn headerName="TID" field="technique" width={150} sortable={true} filter={true} floatingFilter={true}></AgGridColumn>
            <AgGridColumn headerName="Technique Name" field="technique_name" width={450} sortable={true} filter={true} floatingFilter={true}></AgGridColumn>
            <AgGridColumn headerName="Platforms" field="platforms" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Data Sources" field="datasources" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Tactics" field="tactics" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Adversaries" field="adversaries" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Malware" field="malware" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
            <AgGridColumn headerName="Tools" field="tools" width={140} sortable={true} filter="agNumberColumnFilter"></AgGridColumn>
          </AgGridReact>
        </div>
      );
  }
}

export default WebsiteMaStatsGrid;