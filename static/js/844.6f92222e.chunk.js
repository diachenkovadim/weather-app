"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[844],{7844:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var i=a(1413),n=a(2791),r=a(1889),o=a(6151),s=a(1087),c=a(9504),l=a(6314),d=a(890),p=a(8489),u=a(289),m=a(5053),h=a(3329),f=function(e){var t=e.detailsFields,a=e.country,i=e.cityName,n=e.currentTemp,r=e.weatherDescription,o=e.icon,s=e.weatherDate;return(0,h.jsx)(p.r,{sx:{background:function(e){return"linear-gradient(to bottom, ".concat(e.palette.success.lighter,", ").concat(e.palette.success.light,")")}},children:(0,h.jsx)(c.Z,{children:(0,h.jsxs)(l.Z,{spacing:2,children:[(0,h.jsxs)(l.Z,{direction:"row",spacing:1,justifyContent:"space-between",children:[(0,h.jsxs)(l.Z,{spacing:1,children:[(0,h.jsxs)(d.Z,{variant:"h5",children:[i,", ",a]}),(0,h.jsx)(d.Z,{variant:"body2",textTransform:"capitalize",children:s}),(0,h.jsx)(d.Z,{variant:"body2",textTransform:"capitalize",children:r})]}),(0,h.jsx)(m.F,{imagePath:o,width:120})]}),(0,h.jsxs)(l.Z,{direction:{xs:"column",sm:"row"},alignItems:"center",children:[(0,h.jsxs)(d.Z,{variant:"h3",sx:{display:"flex",width:1,justifyContent:"center"},children:[(0,u.Q)(n)," \xb0C"]}),(0,h.jsxs)(l.Z,{spacing:1,width:1,children:[(0,h.jsx)(d.Z,{variant:"subtitle2",children:"Details"}),t.map((function(e){return(0,h.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",children:[(0,h.jsx)(d.Z,{variant:"body2",children:e.fieldName}),(0,h.jsx)(d.Z,{variant:"subtitle1",children:e.value})]},e.fieldName)}))]})]})]})})})},v=a(9585),x=a(7047),y=a(3496),g=a(3967),w=function(e){var t=e.chart,a=(0,g.Z)(),n=[a.palette.warning.main],r=t.categories,o=t.series,s=t.colors,c=void 0===s?n:s,l=function(e){var t=e.categories,a=e.options,n=e.colors,r=e.theme;return(0,i.Z)((0,i.Z)({stroke:{show:!1},dataLabels:{formatter:function(e){return"".concat((0,u.Q)(Number(e||0)).toString()," \xb0C")},style:{fontSize:"14px",fontWeight:"bold",colors:[r.palette.grey[800]]}},chart:{zoom:{enabled:!1},toolbar:{show:!1}},states:{hover:{filter:{type:"darken",value:.8}}},plotOptions:{bar:{columnWidth:"70%"}},colors:n,yaxis:{labels:{formatter:function(e){return"".concat(e.toString()," \xb0C")}},title:{text:"Temperature"}},xaxis:{tickPlacement:"on",categories:t}},a),{},{responsive:[{breakpoint:r.breakpoints.values.sm,options:{dataLabels:{enabled:!1},tooltip:{fixed:{enabled:!0,position:"top"}}}},{breakpoint:r.breakpoints.values.md,options:{dataLabels:{enabled:!0},tooltip:{fixed:{enabled:!1}}}}]})}({categories:r,options:t.options,colors:c,theme:a});return(0,h.jsx)(y.Z,{type:"bar",series:[{data:o}],options:l,width:"100%",height:300})},j=function(e){var t=e.chartData,a=e.isLoading,i=t.categories,n=t.series,r=t.options;return(0,h.jsxs)(p.r,{children:[(0,h.jsx)(v.Z,{title:"Daily Forecast"}),(0,h.jsx)(c.Z,{children:a?(0,h.jsx)(x.Z,{variant:"rounded",sx:{width:1,height:200}}):(0,h.jsx)(w,{chart:{series:n,categories:i,options:r}})})]})},b=a(7689),Z=a(4914),D=a(1231),C=a(8703),F=function(){var e,t=(0,Z.T)(),a=(0,b.TH)().pathname,i=(0,g.Z)(),r=(0,Z.C)((function(e){return e.weather})),o=r.selectedWeatherData,s=r.dailyForecastData,c=r.isFetchDailyForecast,l=o.name,d=o.sys,p=o.weather,m=o.main,h=o.wind,f=o.dt,v=null===s||void 0===s||null===(e=s.list)||void 0===e?void 0:e.reduce((function(e,t){var a=t.dt_txt.split(" ")[1];return e.categories.push(a),e.series.push(t.main.temp),e}),{categories:[],series:[]}),x=(0,n.useMemo)((function(){return function(e){return[{from:0,to:10,color:e.palette.warning.lighter},{from:11,to:20,color:e.palette.warning.main},{from:21,to:100,color:e.palette.primary.main},{from:-10,to:-1,color:e.palette.secondary.main},{from:-20,to:-11,color:e.palette.secondary.dark},{from:-100,to:-21,color:e.palette.secondary.darker}]}(i)}),[]),y=function(e){var t=e.main,a=t.feels_like,i=t.pressure,n=t.humidity,r=t.temp_max,o=t.temp_min,s=e.wind.speed;return[{fieldName:"Feel Like",value:"".concat((0,u.Q)(a)," \xb0C")},{fieldName:"Wind",value:"".concat(s," m/s")},{fieldName:"Humidity",value:"".concat(n," %")},{fieldName:"Pressure",value:"".concat(i," hPa")},{fieldName:"Max. Temperature",value:"".concat((0,u.Q)(r)," \xb0C")},{fieldName:"Min. Temperature",value:"".concat((0,u.Q)(o)," \xb0C")}]}({main:m,wind:h}),w=(0,C.M)(1e3*f);return{onFetchDailyForecastDataHandler:function(){return t((0,D.$o)(l))},pathname:a,colorConditionsRanges:x,isFetchDailyForecast:c,chartData:v,main:m,name:l,detailFields:y,sys:d,weather:p,dailyForecastData:s,weatherDate:w}},k=a(3527),T=function(){var e=F(),t=e.onFetchDailyForecastDataHandler,a=e.main,c=e.name,l=e.detailFields,d=e.sys,p=e.weather,m=e.chartData,v=e.colorConditionsRanges,x=e.weatherDate,y=e.isFetchDailyForecast,g=e.dailyForecastData,w=e.pathname;return(0,n.useEffect)((function(){t()}),[]),(0,h.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,h.jsx)(r.ZP,{item:!0,xs:12,display:"flex",justifyContent:{xs:"center",sm:"flex-end"},children:(0,h.jsx)(o.Z,{component:s.rU,variant:"contained",disabled:w===k.Z.home,to:k.Z.home,children:"To Home Page"})}),(0,h.jsx)(r.ZP,{item:!0,xs:12,md:6,justifyContent:"center",children:(0,h.jsx)(f,{detailsFields:l,cityName:c,weatherDescription:p[0].description,country:d.country,icon:p[0].icon,currentTemp:a.temp,weatherDate:x})}),(0,h.jsx)(r.ZP,{item:!0,xs:12,md:6,children:(0,h.jsx)(j,{isLoading:y,chartData:(0,i.Z)((0,i.Z)({},m),{},{options:{plotOptions:{bar:{colors:{ranges:v}}},tooltip:{custom:function(e){return function(e){var t=e.main;return'<div class="tooltipWrapper">\n            <div class="rowWrapper">\n              <div>Curr. Temp: </div>\n              <div>'.concat((0,u.Q)(t.temp),'\xb0C</div>\n            </div> \n            <div class="rowWrapper">\n              <div>Max. Temp: </div>\n              <div>').concat((0,u.Q)(t.temp_max),'\xb0C</div>\n            </div>\n            <div class="rowWrapper">\n            <div>Min. Temp: </div>\n            <div>').concat((0,u.Q)(t.temp_min),"\xb0C</div>\n            </div>\n          </div>")}({main:g.list[e.dataPointIndex].main})}}}})})})]})}}}]);
//# sourceMappingURL=844.6f92222e.chunk.js.map