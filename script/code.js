// const student = Vue.createApp({
//     template:`        
//     <div v-if='isVisible' id= 'box1'>
//     <p>{{Name}}</p>
//     <p>{{Surname}}</p>
//     <p>{{greeting}}</p>
//     </div>
//     <input type= 'text' v-model= 'greeting'/>
//     <button v-on:click= 'display'>Click me\ </button>`
//     ,
//     data: function() {
//         return {
//             Name: 'Rasheedah' ,
//             Surname: 'Anhuizen',
//             greeting: 'Hello',
//             isVisible: true
//         }
//     },
//     methods: {
//         display() {
//             this.isVisible = !this.isVisible;
//         }
//     }
// });
// student.mount('#details');

// const app = Vue.createApp({
//     template: `
//         <div v-if='isVisible1' id='box1'>
//             <p>Box 1</p>
//         </div>
//         <div v-else-if='isVisible2' id='box2'>
//             <p>Box 2</p>
//         </div>
//         <div v-else='isVisible3' id='box3'>
//             <p>Box 3</p>
//         </div>
//     `,
//     data: function() {
//         return {
//             isVisible1: false,
//             isVisible2: true,
//             isVisible3: true
//         }
//     },
//     methods: {
//     }
// });
// app.mount('#app');


const app = Vue.createApp({
    data: function(){
        return{
            show: false
        }
    },
    methods:{
        handleKeyPressed(e){
            console.log(e)
            console.log(e.key);
            if (e.code = 'KeyA') {
                this.show = true
            }
            if (e.code != 'KeyA'){
                this.show = false
            }
        }
    }
})

app.mount('#app')








