(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(9),r=n(6),c=n(1),l=n(2),i=n(4),u=n(3),s=n(5),m=n(0),d=n.n(m),f=n(10),b=n.n(f),h=(n(18),function(e){var t=e.toDo,n=e.done;return d.a.createElement("div",{className:"app-header d-flex"},d.a.createElement("h1",null,"Todo List"),d.a.createElement("h2",null,t," more to do, ",n," done"))}),p=(n(20),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.OnSearchChange=function(e){var t=e.target.value;n.setState({term:t}),n.props.onSearchChange(t)},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return d.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.OnSearchChange})}}]),t}(m.Component)),g=n(11),v=(n(22),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,o=e.onToggleDone,r=e.important,c="todo-list-item";return e.done&&(c+=" done"),r&&(c+=" important"),d.a.createElement("span",{className:c},d.a.createElement("span",{onClick:o,className:"todo-list-item-label"},t),d.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},d.a.createElement("i",{className:"fa fa-exclamation"})),d.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},d.a.createElement("i",{className:"fa fa-trash-o"})))}),O=(n(24),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,o=e.onToggleDone,r=t.map(function(e){var t=e.id,r=Object(g.a)(e,["id"]);return d.a.createElement("li",{key:t,className:"list-group-item"},d.a.createElement(v,Object.assign({},r,{onDeleted:function(){return n(t)},onToggleDone:function(){return o(t)},onToggleImportant:function(){return a(t)}})))});return d.a.createElement("ul",{className:"list-group todo-list"},r)}),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map(function(e){var a=e.name,o=e.label,r=t===a?"btn-info":"btn-outline-secondary";return d.a.createElement("button",{type:"button",className:"btn ".concat(r),key:a,onClick:function(){return n(a)}},o)});return d.a.createElement("div",{className:"btn-group"},a)}}]),t}(m.Component),j=(n(26),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={label:" "},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.addNewItem(n.state.label),n.setState({label:""})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return d.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},d.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What's need to be done",value:this.state.label}),d.a.createElement("button",{className:"btn btn-outline-secondary"},"Add"))}}]),t}(m.Component));n(28);n.d(t,"default",function(){return E});var E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={todoData:[n.createTodoItem("Drink Coffee"),n.createTodoItem("Make breakfast"),n.createTodoItem("Eat dinner")],term:" ",filter:"all"},n.deleteItem=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e});return{todoData:[].concat(Object(r.a)(n.slice(0,a)),Object(r.a)(n.slice(a+1)))}})},n.addNewItem=function(e){var t=n.createTodoItem(e);n.setState(function(e){var n=e.todoData;return{todoData:[].concat(Object(r.a)(n),[t])}})},n.onToggleImportant=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}})},n.onToggleDone=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}})},n.onSearchChange=function(e){n.setState({term:e})},n.onFilterChange=function(e){n.setState({filter:e})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var c=e.findIndex(function(e){return e.id===t}),l=e[c],i=Object(o.a)({},l,Object(a.a)({},n,!l[n]));return[].concat(Object(r.a)(e.slice(0,c)),[i],Object(r.a)(e.slice(c+1)))}},{key:"search",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,o=this.filter(this.search(t,n),a),r=t.filter(function(e){return e.done}).length,c=t.length-r;return d.a.createElement("div",{className:"todo-app"},d.a.createElement(h,{toDo:c,done:r}),d.a.createElement("div",{className:"top-panel d-flex"},d.a.createElement(p,{onSearchChange:this.onSearchChange}),d.a.createElement(y,{filter:a,onFilterChange:this.onFilterChange})),d.a.createElement(O,{todos:o,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),d.a.createElement(j,{addNewItem:this.addNewItem}))}}]),t}(m.Component);b.a.render(d.a.createElement(E,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.68946281.chunk.js.map