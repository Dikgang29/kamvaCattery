function weeklyWage (band, hoursWorked) {
    const userBands = {
      A: {
        description: "New casuals",
        hourlyRate: 23
      }, 
      B: {
        description: "Established casuals",
        hourlyRate: 37
      },
      C: {
        description: "Supervisors",
        hourlyRate: 51
      }
    };
          
    const weeklyHoursArr = hoursWorked.split(",").map(hour => parseInt(hour)) 
    
    if(weeklyHoursArr.length < 7){
      return "missing day";
    } else if (!userBands[band]){
      return 0;
    }else{
      const totalWeeklyHours = weeklyHoursArr.reduce((sum, currentVal) => sum +  currentVal, 0 );
      return userBands[band].hourlyRate * totalWeeklyHours;
    }
  }