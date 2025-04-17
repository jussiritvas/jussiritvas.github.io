<script>
    import { writable } from 'svelte/store';
    import { SvelteFlow, Controls, Background, BackgroundVariant, MiniMap } from '@xyflow/svelte';
    import '@xyflow/svelte/dist/style.css';
    import {nodes2} from '$lib/data/nodes_new'

    function getNodePositions(centerX, centerY, distance, startDegrees, endDegrees, numNodes) {
    /**
     * Calculate positions of nodes around a central point.
     * 
     * @param {number} centerX - X-coordinate of center point
     * @param {number} centerY - Y-coordinate of center point
     * @param {number} distance - Distance from center to each node
     * @param {number} startDegrees - Starting angle in degrees
     * @param {number} endDegrees - Ending angle in degrees
     * @param {number} numNodes - Number of nodes to place
     * @returns {Array<Array<number>>} Array of [x, y] positions
     */
    
    if (numNodes < 1) {
        return [];
    }

    // Convert degrees to radians
    const startAngle = startDegrees * Math.PI / 180;
    const endAngle = endDegrees * Math.PI / 180;
    const totalAngle = endAngle - startAngle;

    // Calculate angle between nodes
    // If only one node, place it at the start angle
    const angleIncrement = numNodes === 1 ? 0 : totalAngle / (numNodes);

    // Initialize result array
    const positions = [];

    // Calculate each node's position
    for (let i = 0; i < numNodes; i++) {
        // Calculate angle for current node
        const angle = startAngle + i * angleIncrement;
        console.log(angle)
        // Calculate x, y coordinates using polar to cartesian conversion
        const x = centerX + distance * Math.sin(angle);
        const y = centerY + distance * Math.cos(angle) * -1;

        positions.push([x, y]);
    }

    return positions;
}

    /*function iterateObject(obj, parent_id = 0, depth = 0) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
            console.log(`${"  ".repeat(depth)}${key}`); // Indent for readability
            if (typeof obj[key] === "object" && obj[key] !== null) {
                if (Array.isArray(obj[key].urls)) {
                console.log(`${"  ".repeat(depth + 1)}URLs:`, obj[key].urls);
                } else {
                iterateObject(obj[key], depth + 1); // Recurse into nested object
                }
            }
            }
        }
    }*/
    
    
    const test = getNodePositions(0, 0, 200, 0, 360, 3)
    console.log(test)
    const test2 = getNodePositions(test[0][0], test[0][1], 150, 0, 170, 3)
    
    
    // Define initial nodes with positions and labels
    const initialNodes = [
      { id: '1', position: { x: 0, y: 0 }, data: { label: 'My knowledge' }, draggable: false },
      { id: '2', position: { x: test[0][0], y: test[0][1] }, data: { label: 'Quantum Computing' }, draggable: false },
      { id: '3', position: { x: test[1][0], y: test[1][1] }, data: { label: 'Fullstack Development' }, draggable: false },
      { id: '4', position: { x: test[2][0], y: test[2][1] }, data: { label: 'Software Engineering' }, draggable: false },
      { id: '5', position: { x: test2[0][0], y: test2[0][1] }, data: { label: 'Quantum Error Correction' }, draggable: false },
      { id: '6', position: { x: test2[1][0], y: test2[1][1] }, data: { label: 'Quantum Algorithms' }, draggable: false },
      { id: '7', position: { x: test2[2][0], y: test2[2][1] }, data: { label: 'Introduction' }, draggable: false },

    ];

    // Define initial edges to connect nodes
    const initialEdges = [
      { id: 'e1-2', source: '1', target: '2', type: "straight"},
      { id: 'e1-3', source: '1', target: '3', type: "straight" },
      { id: 'e2-4', source: '1', target: '4', type: "straight" },
    ];

    // Use writable stores for nodes, edges, and modal state
    const nodes = writable(initialNodes);
    const edges = writable(initialEdges);
    const snapGrid = [25, 25];

    // Modal state
    let showModal = false;
    let selectedNode = null;

    // Counter for unique node IDs
    let nodeIdCounter = 5; // Start after initial nodes (1-4)

    // Handle node click events
    function onNodeClick(event) {
        /*const node = event.detail.node;
        if (node) {
            selectedNode = node;
            showModal = true;

            // Generate three new nodes
            const newNodes = [];
            const newEdges = [];
            const baseX = node.position.x;
            const baseY = node.position.y;

            for (let i = 0; i < 3; i++) {
                const newNodeId = `${nodeIdCounter++}`;
                const angle = (i * 120 * Math.PI) / 180; // Position nodes 120 degrees apart
                const distance = 150; // Distance from clicked node
                const newNode = {
                    id: newNodeId,
                    position: {
                        x: baseX + distance * Math.cos(angle),
                        y: baseY + distance * Math.sin(angle),
                    },
                    data: { label: `New Node ${newNodeId}` },
                    draggable: false,
                };
                const newEdge = {
                    id: `e${node.id}-${newNodeId}`,
                    source: node.id,
                    target: newNodeId,
                };
                newNodes.push(newNode);
                newEdges.push(newEdge);
            }

            // Update stores with new nodes and edges
            nodes.update((currentNodes) => [...currentNodes, ...newNodes]);
            edges.update((currentEdges) => [...currentEdges, ...newEdges]);
        }*/
    }

    // Close modal
    function closeModal() {
        showModal = false;
        selectedNode = null;
    }
</script>

<div style="height: 90vh; width: 100%;">
    <SvelteFlow
        {nodes}
        {edges}
        on:nodeclick={onNodeClick}
        zoomOnScroll={false}
        fitView
        preventScrolling={false}
    >
    </SvelteFlow>

    {#if showModal && selectedNode}
        <div class="modal-overlay">
            <div class="modal">
                <h2>Node Details</h2>
                <p>{selectedNode.data.label}</p>
                <button on:click={closeModal}>Close</button>
            </div>
        </div>
    {/if}
</div>

<style>
    :global(.svelte-flow__node) {
        padding: 10px;
        border-radius: 25px;
        background: #ffffff;
        border: 1px solid #1a192b;
        color: #222;
        font-size: 12px;
        text-align: center;
    }



    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal {
        background: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 100%;
        text-align: center;
    }

    .modal h2 {
        margin-top: 0;
        font-size: 1.5em;
    }

    .modal p {
        margin: 1em 0;
        font-size: 1.2em;
    }

    .modal button {
        padding: 8px 16px;
        background: #1a192b;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    .modal button:hover {
        background: #2a293b;
    }
</style>