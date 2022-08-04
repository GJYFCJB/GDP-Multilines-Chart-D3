import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {LineChart} from "@d3/line-chart"
import '../index.css';

function LineChart(props) {
    const {data, width, height} = props;
    const chartRef = useRef();
    useEffect(() => {
        drawChart();
    }, [data]);

    d3.select('#container')
        .select('svg')
        .remove();
    d3.select('#container')
        .select('.tooltip')
        .remove();
    d3.add
    const drawChart = () => {
        const chart = d3.select(chartRef.current);
        const chartDiv = chart.append('div');
        chart = LineChart(data, {
            x: d => d.label,
            y: d => d.value,
            yLabel: "↑ Daily close ($)",
            width,
            height: 500,
            color: "steelblue"
        })
    }

    // const focus = svg
    //     .append('g')
    //     .attr('class', 'focus')
    //     .style('display', 'none');
    // focus.append('circle').attr('r', 5).attr('class', 'circle');
    // const tooltip = d3
    //     .select('#container')
    //     .append('div')
    //     .attr('class', 'tooltip')
    //     .style('opacity', 0);
    // svg
    //     .append('rect')
    //     .attr('class', 'overlay')
    //     .attr('width', width)
    //     .attr('height', height)
    //     .style('opacity', 0)
    //     .on('mouseover', () => {
    //         focus.style('display', null);
    //     })
    //     .on('mouseout', () => {
    //         tooltip
    //             .transition()
    //             .duration(300)
    //             .style('opacity', 0);
    //     })
    //     .on('mousemove', mousemove);
    //
    // function mousemove(event) {
    //     const bisect = d3.bisector(d => d.label).left;
    //     const xPos = d3.mouse(this)[0];
    //     const x0 = bisect(data, xScale.invert(xPos));
    //     const d0 = data[x0];
    //     focus.attr(
    //         'transform',
    //         `translate(${xScale(d0.label)},${yScale(d0.value)})`,
    //     );
    //     tooltip
    //         .transition()
    //         .duration(300)
    //         .style('opacity', 0.9);
    //     tooltip
    //         .html(d0.tooltipContent || d0.label)
    //         .style(
    //             'transform',
    //             `translate(${xScale(d0.label) + 30}px,${yScale(d0.value) - 30}px)`,
    //         );
    // }

    return (
        <div
            ref={chartRef}
        />

    );
}

export default LineChart;