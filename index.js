const randLiGen = {
	data() {
		return{
			min:null,
			len:null,
			max:null,
		}
	},
	methods: {
		rarr() {
			let str = "[";
			for ( i = 0; i<this.len; i++) {
				let cur=(Math.random()*(this.max-this.min+1))+(+this.min);
				cur = Math.trunc(cur);
				if(i+1==this.len) {
					str+=cur;
					continue;
				}
				str+=cur+",";
				
			}
			str+="]";
			return str=="[]"?null:str;
			},
			rerun(){
				this.max-=0.5;
				this.max+=0.5;
			},
			
	}

  }
  
  Vue.createApp(randLiGen).mount('#app')