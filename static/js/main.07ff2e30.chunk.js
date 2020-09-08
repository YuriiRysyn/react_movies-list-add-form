(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(6),l=a.n(r),o=(a(15),a(9)),m=a(1),c=a(2),s=a(4),d=a(3),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var h=a(7),g=(a(19),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.stateCleaner=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e.changeHandler=function(t){e.setState(Object(h.a)({},t.name,t.value))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,i=t.description,r=t.imgUrl,l=t.imdbUrl,o=t.imdbId,m=this.props.addMovie;return n.a.createElement("form",{className:"newMovieAdder",onSubmit:function(t){m(e.state,t),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})}},n.a.createElement("p",{className:"newMovieAdder__header"},"Add new movie"),n.a.createElement("input",{name:"title",placeholder:"Movie name",value:a,className:"newMovieAdder__input",onChange:function(t){return e.changeHandler(t.target)},required:!0}),n.a.createElement("textarea",{name:"description",placeholder:"Movie descrition",value:i,className:"newMovieAdder__input newMovieAdder__input--textarea",onChange:function(t){return e.changeHandler(t.target)},required:!0}),n.a.createElement("input",{type:"url",name:"imgUrl",placeholder:"Movie imgUrl",value:r,className:"newMovieAdder__input",onChange:function(t){return e.changeHandler(t.target)},required:!0}),n.a.createElement("input",{type:"url",name:"imdbUrl",placeholder:"Movie imdbUrl",value:l,className:"newMovieAdder__input",onChange:function(t){return e.changeHandler(t.target)},required:!0}),n.a.createElement("input",{name:"imdbId",placeholder:"Movie imdbId",value:o,className:"newMovieAdder__input",onChange:function(t){return e.changeHandler(t.target)},required:!0}),n.a.createElement("button",{type:"submit",className:"newMovieAdder__submit-btn"},"Add movie"))}}]),a}(i.Component)),v=a(8),M=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t,a){a.preventDefault(),e.setState((function(e){return{movies:[].concat(Object(o.a)(e.movies),[t])}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(g,{movies:e,addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(n.a.createElement(M,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.07ff2e30.chunk.js.map