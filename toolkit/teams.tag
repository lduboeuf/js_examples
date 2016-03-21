<teams>


  <form onsubmit={ validate }>
    <select name="qst_choice">
      <option value="1">nb of pers. per team:</option>
      <option value="2">Who's going to ... ? (nb of pers.):</option>
    </select>
     <!--  <label for="nb-pers">1 - nb of pers. per team:</label> -->
     <input type="text" name="nb_pers" maxlength="2"  required/>
      <button>ok</button>
  </form>


  <div each={ team in teams }>
    <h3>{ team.name }</h3>
    <ul>
      <li each={ name, i in team.peoples }>
       { name }
      </li> 
    </ul>
  </div>


  <script>
    this.peoples = opts.peoples
  

    validate(e) {
      var qst = this.qst_choice.value;
      var nbPers = this.nb_pers.value;
      try {
        if (qst ==1){
          this.calculateTeams(nbPers);
        }else{
          this.findPeoples(nbPers);
        }
      } catch(e){
        console.log(e);
      }

    }

    calculateTeams(nbPers) {
      if (nbPers) {
        this.teams = [];
        //work with a copy of initial list
        var peoplesTemp = this.peoples.slice();


        var nbTeam = Math.floor(peoplesTemp.length / nbPers);

        console.log("nbPers:" + nbPers + " - nbTeam:" + nbTeam);


        for (var i = 0; i < nbTeam; i++) {
          
          var team = [nbPers];
          for (var j = 0; j < nbPers; j++) {

            var n = Math.floor(Math.random() * (peoplesTemp.length - 1));
            team[j] = peoplesTemp.splice(n, 1);

          }

          this.teams.push({name: 'Team'+i, peoples: team});

        }

        //any orphans ?
        if (peoplesTemp.length>0){
          this.teams.push({name: 'Team Orphan(s)', peoples: peoplesTemp});
        }

    
      }
    }

    findPeoples(nbPers) {
      if (nbPers) {
        this.teams = [];
        //work with a copy of initial list
        var peoplesTemp = this.peoples.slice();
        
               
        var team = [nbPers];
        for (var i=0; i < nbPers;i++){
           var n = Math.floor(Math.random() * (peoplesTemp.length - 1));
           team[i] = peoplesTemp.splice(n, 1);
           
        }
        this.teams.push({name: 'Hall of fame', peoples: team});
      }
    }


  </script>

</teams>
