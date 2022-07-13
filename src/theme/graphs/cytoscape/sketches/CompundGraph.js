import React from 'react';
// @3rdParty
import cytoscape from 'cytoscape';
// @css
import './ctrpanel.css';


export default function CompoundGraph() {
    // @refs
    const container = React.useRef(null)
    const layout    = React.useRef(null)
    const graph     = React.useRef(null)
    // @state
    // @handlers
    
    // @effects
    React.useEffect(() => {
        if (!container.current) { return }
        if (!graph.current) {
            let elements = initNodes();
            let style = initStyles();
            try {
                graph.current = cytoscape({
                    container: container.current,
                    elements,
                    style
                })
                layout.current = graph.current.elements()
                                              .makeLayout({name: 'preset'})
            } catch (error) {
                console.log(`(?) Error | Mounting Graph: ${error}`)
            }
        }
    }, [])

    React.useState(() => {
        return () => {
            graph.current && graph.current.destroy()
        }
    }, [])

    return (
        <>
            <div className="ctrl-panel">
                <span><strong>Control Panel</strong></span>
            </div>
            <br />
            <div className="cyto-graph" ref={container} />
        </>
    )
}


// @data
const killChains = [
    'Initial Access',
    'Process Created',
    'File Created',
    'Network Accessed',
    'NamedPipes',
    'File Deleted'
  ]

const initNodes = () => {
    return { nodes: [
        { data: { id: killChains[1]}},
        { data: { id: killChains[2]}},      
        { data: { id: killChains[3]}},
        { data: { id: killChains[4]}},
        { data: { id: killChains[5]}},
        { data: { id: '1', parent: killChains[1]}, position: {x: 215, y: 85}},
        { data: { id: '2', parent: killChains[1]}, position: {x: 300, y: 85}},
        { data: { id: '3', parent: killChains[1]}, position: {x: 300, y: 175}},
        { data: { id: '4', parent: killChains[2]}, position: {x: 400, y: 175}},
        { data: { id: '5', parent: killChains[3]}, position: {x: 60, y: 400}},
        { data: { id: '6', parent: killChains[4]}, position: {x: 20, y: 400}},
        { data: { id: '7', parent: killChains[5]}, position: {x: 60, y: 400}},
      ],
      edges: [
        { data: { id: 'a1', source: '1', target: '2'}},
        { data: { id: 'a2', source: '2', target: '3'}},
        { data: { id: 'a3', source: '3', target: '4'}},
        { data: { id: 'a35', source: '3', target: '5'}},
        { data: { id: 'a53', source: '5', target: '3'}},
        { data: { id: 'a36', source: '3', target: '6'}},
        { data: { id: 'a37', source: '3', target: '7'}},
        { data: { id: 'a62', source: '6', target: '2'}},
      ]
    }
}

const initStyles = () => {
    return [
        {
          selector: 'node',
          css: {
            'content': 'data(id)',
            'text-valign': 'center',
            'text-halign': 'center',
            'background-color': 'green',
            'color': '#ffffff'
          }
        },
        {
          selector: ':parent',
          css: {
            'color': 'black',
            'text-valign': 'top',
            'text-halign': 'center',
            'background-opacity': 0.2
          }
        },
        {
          selector: 'edge',
          css: {
            "line-color": "#666",
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle'
          }
        }
      ]
}