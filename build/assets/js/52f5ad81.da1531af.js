(self.webpackChunkmitre_assistant=self.webpackChunkmitre_assistant||[]).push([[327],{49320:function(e,t,r){"use strict";var i=r(67294),a=r(34e3);t.Z=function(e){var t=e.statistic,n=e.version,s=[];switch(t){case"tactics":return r(8===n?4834:68804).forEach((function(e,t){s.push({index:t+1,tactic:e.item,techniques:e.count_techniques,subtechniques:e.count_subtechniques,percent_techniques:e.percent_techniques,percent_subtechniques:e.percent_subtechniques})})),i.createElement("div",{className:"ag-theme-alpine",style:{height:640,width:900}},i.createElement(a.AgGridReact,{rowData:s},i.createElement(a.AgGridColumn,{field:"index",width:75}),i.createElement(a.AgGridColumn,{headerName:"Tactics",field:"tactic",width:200,sortable:!0}),i.createElement(a.AgGridColumn,{headerName:"Techniques",field:"techniques",width:140,sortable:!0}),i.createElement(a.AgGridColumn,{headerName:"Sub-Techniques",field:"subtechniques",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Techniques",field:"percent_techniques",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Sub-Techniques",field:"percent_subtechniques",width:160})));case"platforms":return r(8===n?69114:30999).forEach((function(e,t){s.push({index:t+1,platform:e.item,techniques:e.count_techniques,subtechniques:e.count_subtechniques,percent_techniques:e.percent_techniques,percent_subtechniques:e.percent_subtechniques})})),i.createElement("div",{className:"ag-theme-alpine",style:{height:513,width:900}},i.createElement(a.AgGridReact,{rowData:s},i.createElement(a.AgGridColumn,{field:"index",width:75}),i.createElement(a.AgGridColumn,{headerName:"Platforms",field:"platform",width:200,sortable:!0}),i.createElement(a.AgGridColumn,{headerName:"Techniques",field:"techniques",width:140,sortable:!0}),i.createElement(a.AgGridColumn,{headerName:"Sub-Techniques",field:"subtechniques",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Techniques",field:"percent_techniques",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Sub-Techniques",field:"percent_subtechniques",width:160})));case"datasources":return r(8===n?4834:26891).forEach((function(e,t){s.push({index:t+1,datasource:e.item,techniques:e.count_techniques,subtechniques:e.count_subtechniques,percent_techniques:e.percent_techniques,percent_subtechniques:e.percent_subtechniques})})),i.createElement("div",{className:"ag-theme-alpine",style:{height:1296,width:960}},i.createElement(a.AgGridReact,{rowData:s},i.createElement(a.AgGridColumn,{field:"index",width:75}),i.createElement(a.AgGridColumn,{headerName:"Data Sources",field:"datasource",width:260,sortable:!0}),i.createElement(a.AgGridColumn,{headerName:"Techniques",field:"techniques",width:140,sortable:!0}),i.createElement(a.AgGridColumn,{headerName:"Sub-Techniques",field:"subtechniques",width:160,sortable:!0}),i.createElement(a.AgGridColumn,{headerName:"% Techniques",field:"percent_techniques",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Sub-Techniques",field:"percent_subtechniques",width:160})));case"adversaries":return r(8===n?4834:13589).forEach((function(e,t){s.push({index:t+1,adversary:e.item,tactics:e.count_tactics,techniques:e.count_techniques,subtechniques:e.count_subtechniques,malware:e.count_malware,tools:e.count_tools,percent_techniques:e.percent_techniques,percent_subtechniques:e.percent_subtechniques,percent_tactics:e.percent_tactics,percent_malware:e.percent_malware,percent_tools:e.percent_tools})})),i.createElement("div",{className:"ag-theme-alpine",style:{height:1296,width:1024}},i.createElement(a.AgGridReact,{rowData:s},i.createElement(a.AgGridColumn,{field:"index",width:75}),i.createElement(a.AgGridColumn,{headerName:"Adversaries",field:"adversary",width:260,sortable:!0,filter:!0,floatingFilter:!0}),i.createElement(a.AgGridColumn,{headerName:"Tactics",field:"tactics",width:140,sortable:!0,filter:"agNumberColumnFilter"}),i.createElement(a.AgGridColumn,{headerName:"Techniques",field:"techniques",width:140,sortable:!0,filter:"agNumberColumnFilter"}),i.createElement(a.AgGridColumn,{headerName:"Sub-Techniques",field:"subtechniques",width:160,sortable:!0,filter:"agNumberColumnFilter"}),i.createElement(a.AgGridColumn,{headerName:"Malware",field:"malware",width:140,sortable:!0,filter:"agNumberColumnFilter"}),i.createElement(a.AgGridColumn,{headerName:"Tools",field:"tools",width:140,sortable:!0,filter:"agNumberColumnFilter"}),i.createElement(a.AgGridColumn,{headerName:"% Tactics",field:"percent_tactics",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Techniques",field:"percent_techniques",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Sub-Techniques",field:"percent_subtechniques",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Malware",field:"percent_malware",width:160}),i.createElement(a.AgGridColumn,{headerName:"% Tools",field:"percent_tools",width:160})))}}},92855:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return o}});var i=r(22122),a=r(19756),n=(r(67294),r(3905)),s=r(49320),c={},u={unversionedId:"project/Data Samples/V9 Enterprise/Stats_By_Adversaries",id:"project/Data Samples/V9 Enterprise/Stats_By_Adversaries",isDocsHomePage:!1,title:"Stats By Adversaries",description:"Mitre Assistant has a built-in query to quickly know the density of techniques in relation to the enterprise adversary.",source:"@site/docs/project/Data Samples/V9 Enterprise/04-Stats_By_Adversaries.md",sourceDirName:"project/Data Samples/V9 Enterprise",slug:"/project/Data Samples/V9 Enterprise/Stats_By_Adversaries",permalink:"/docs/project/Data Samples/V9 Enterprise/Stats_By_Adversaries",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/project/Data Samples/V9 Enterprise/04-Stats_By_Adversaries.md",version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stats By Data Sources",permalink:"/docs/project/Data Samples/V9 Enterprise/Stats_By_Datasources"},next:{title:"Getting Started",permalink:"/docs/project/Getting_Started"}},l=[],d={toc:l};function o(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Mitre Assistant")," has a built-in query to quickly know the density of techniques in relation to the enterprise adversary."),(0,n.kt)("p",null,"This query produces the table seen at below."),(0,n.kt)("br",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Density of techniques to enterprise ATT&CK Adversary"',title:'"Density',of:!0,techniques:!0,to:!0,enterprise:!0,"ATT&CK":!0,'Adversary"':!0},'mitre-assistant search -m enterprise -t "stats:adversaries"\n')),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{statistic:"adversaries",version:9,mdxType:"MaStatsGrid"}))}o.isMDXComponent=!0}}]);