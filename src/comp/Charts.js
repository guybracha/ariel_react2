import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Charts() {
    const [ar, setAr] = useState([]);

    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        try {
            const url = "http://fs1.co.il/bus/phones/list.php";
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            const filter_ar = data.filter((item, i) => i < 5);
            const graph_ar = filter_ar.map(item => {
                return {
                    label: item.name,
                    y: Number(item.battery_score)
                };
            });
            setAr(graph_ar);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const options = {
        animationEnabled: false,
        exportEnabled: true,
        theme: "light2",
        title: {
            text: "Graph test 333"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "column",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: ar
        }]
    };

    return (
        <div className='container'>
            <h1>Graph</h1>
            <CanvasJSChart options={options} />
        </div>
    );
}
