AFRAME.registerComponent('carTurn',{
    schema:{
        carRotation:{
            type:'number',
            default:0
        },
        carPosition:{
            type:'number',
            default:0
        },
    init:function(){
        window.addEventListener('keydown',(e)=>{
            this.data.carRotation=this.el.getAttribute('rotation')
            this.data.carPosition=this.el.getAttribute('position')
            var rot=this.data.carRotation
            var pos=this.data.carPosition

            if (e.key==='ArrowRight'){
                rot.x+=0.5
                this.el.setAttribute('rotation',rot)
            }
            if (e.key==='ArrowLeft'){
                rot.x-=0.5
                this.el.setAttribute('rotation',rot)
            }
            if (e.key==='ArrowUp'){
                pos.x+=0.5
                this.el.setAttribute('position',pos)
            }
            if (e.key==='ArrowDown'){
                pos.x-=0.5
                this.el.setAttribute('position',pos)
            }
        })
    }
    }
})