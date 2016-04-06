//   var dPieChart = function(){
//   var canvas = d3.select('#wrapper')
//               .append('svg')
//               .attr({'width':650,'height':500});
//          $.ajax({type: "GET",
//               url: "/users/currentsession",
//               dataType: "json"}).done(function(response){
//          $.ajax({
//                 type: "GET",
//                 url: "/users/" + response,
//                 dataType: "json"
//               }).done(function(response) {
//                 var data = response[0].amount
//                 var total_amount = response[0].total_amount
//         // console.log(data)


//       // var amount = [{"category":"Flood", "value":40},
//       //         {"label":"Hurricane", "value":30},
//       //         {"label":"Earthquake", "value":20},
//       //         {"label":"Fire", "value":15},
//       //         {"label":"Disease", "value":10}];

//               var colors = ['#c8e5e8','#282efa', '#505cf6', '#a0b7ed', '#7889f1'];

//               var colorscale = d3.scale.linear().domain([0,data.length]).range(colors);

//         pi = 3.141592653589793238462643383279502884197169;

//       var width = 700,
//         height = 500,
//         radius = Math.min(width, height) / 2;

//       var pie = d3.layout.pie()
//         .value(function(d) {
//           return d.value;
//         })
//         .startAngle(-180 * (pi / 180))
//         .endAngle(180 * (pi / 180));

//           var arc = d3.svg.arc()
//         .innerRadius(radius - 150)
//         .outerRadius(radius - 20);

//       var arcOver = d3.svg.arc()
//         .innerRadius((radius - 150) + 10)
//         .outerRadius((radius - 20) + 10);


//       var renderarcs = canvas.append('g')
//               .attr('transform','translate(300,250)')
//               .selectAll('.arc')
//               .data(pie(data))
//               .enter().append("g")
//               .attr('class',"arc");


//       renderarcs.append("text")
//                   .attr("dy", ".05em")
//                   .attr("text-anchor", "middle")
//                   .text( "")
//                   .attr("id", "value")
//                   .attr("class", "text-tooltip")
//                       .style("text-anchor", "middle")
//                       .style("font-family", "Arial" )
//                       .attr("font-weight", "bold")
//                       .style("font-size", radius/6 +"px");

//       renderarcs.append("text")
//                   .attr("dy", "1.00em")
//                   .attr("text-anchor", "middle")
//                   .text( "")
//                   .attr("id", "category")
//                   .attr("class", "text-tooltip")
//                       .style("text-anchor", "middle" )
//                       .style("font-family", "Arial" )
//                       .attr("font-weight", "bold")
//                       .style("font-size", radius/8 +"px");



//       d3.select("#category").text("Total").style('fill', 'orange')


//       function changeValue(i){
//         if (i < total_amount +1){
//         d3.select("#value").text("$" + i).style('fill', 'orange')
//         setTimeout(function(){
//             changeValue(i += parseInt(total_amount/100) ) //total_amount/100
//         }, 0.5);}
//       }

//       changeValue(0);
//       d3.select("#value").text("$" + total_amount).style('fill', 'orange')


//       renderarcs.append('path')
//           .attr('fill',function(d,i){ return colorscale(i); })

//           .on("mouseover", function(d) {
//                     d3.select(this).transition()
//                        .duration(200)
//                        .attr("d", arcOver);

//                     d3.select("#value").text('$' + d.value).style('fill', $(this).attr('fill'))
//                     console.log(d.data)
//                     d3.select("#category").text(d.data.category).style('fill', $(this).attr('fill'))
//                    })


//           .on("mouseout", function(d) {
//                     d3.select(this).transition()
//                        .duration(200)
//                        .attr("d", arc);
//                     d3.select("#value").text('$' + total_amount).style('fill', 'orange')
//                     d3.select("#category").text("Total").style('fill', 'orange')

//                    })
//           .transition().delay(function(d, i) { return i * 200; }).duration(200)
//             .attrTween('d', function(d) {
//                  var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
//                  return function(t) {
//                      d.endAngle = i(t);
//                    return arc(d);

//                  }
//              })
//             })
//   })
// }
