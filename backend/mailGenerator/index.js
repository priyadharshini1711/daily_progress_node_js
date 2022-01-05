module.exports = (obj) => {
console.log("inside",JSON.stringify(obj));
    const today = new Date();
return `
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Table Style</title>
    <meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; width=device-width;">
    <link >
    <style>
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);

body {
  background-color: #3e94ec;
  font-family: "Roboto", helvetica, arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-rendering: optimizeLegibility;
}

div.table-title {
  display: block;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
}

.table-title h3 {
   color: #262626;
   font-size: 30px;
   font-weight: 400;
   font-style:normal;
   font-family: "Roboto", helvetica, arial, sans-serif;
   text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
   text-transform:uppercase;
}


/*** Table Styles **/

.table-fill {
  background: white;
  border-radius:3px;
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding:5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
  table-layout: fixed;
}
 
th {
  color:#D5DDE5;;
  background:#1b1e24;
  border-bottom:4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size:23px;
  font-weight: 100;
  padding:24px;
  text-align:left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align:middle;
}

th:first-child {
  border-top-left-radius:3px;
}
 
th:last-child {
  border-top-right-radius:3px;
  border-right:none;
}
  
tr {
  border-top: 1px solid #C1C3D1;
  border-bottom-: 1px solid #C1C3D1;
  color:#666B85;
  font-size:16px;
  font-weight:normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  
}
 
tr:hover td {
  background:#4E5066;
  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
tr:first-child {
  border-top:none;
}

tr:last-child {
  border-bottom:none;
}
 
tr:nth-child(odd) td {
  background:#EBEBEB;
}
 
tr:nth-child(odd):hover td {
  background:#4E5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}
 
td {
  background:#FFFFFF;
  padding:20px;
  text-align:left;
  vertical-align:middle;
  font-weight:300;
  font-size:18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #C1C3D1;
  border-left: 1px solid #C1C3D1;
  border-bottom: 1px solid #C1C3D1;
  word-wrap:break-word
}

td:last-child {
  border-right: 0px;  
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}

    </style>
</head>

<body>
<div class="table-title">
<h3>Daily Report</h3>
</div>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">Title</th>
<th class="text-left">Content</th>
</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">Emotion</td>
<td class="text-left">${obj.emotion}</td>
</tr>
<tr>
<td class="text-left">Learning</td>
<td class="text-left">${obj.learning}</td>
</tr>
<tr>
<td class="text-left">Plan For the Day</td>
<td class="text-left">${obj.planForTheDay}</td>
</tr>
<tr>
<td class="text-left">Challenge of the Day</td>
<td class="text-left">${obj.challenge}</td>
</tr>
<tr>
<td class="text-left">Planned Accomplishments</td>
<td class="text-left">${obj.plannedAccomplishments}</td>
</tr>
<tr>
<td class="text-left">Unplanned Accomplishments</td>
<td class="text-left">${obj.unplannedAccomplishments}</td>
</tr>
<tr>
<td class="text-left">Plan for the Next Day</td>
<td class="text-left">${obj.planForNextDay}</td>
</tr>
<tr>
<td class="text-left">Appreciation and Thanks</td>
<td class="text-left">${obj.appreciationAndThanks}</td>
</tr>
</tbody>
</table>
  </body>
  </html>
    `;
};