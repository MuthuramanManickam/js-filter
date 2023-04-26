const dates = [
    { name: 'application1', date: '2023-07-01' },
    { name: 'application2', date: '2023-06-05' },
    { name: 'application3', date: '2023-06-10' },
    { name: 'application4', date: '2023-07-15' },
  ];

  startDate=new Date('2023-06-04')
  endDate=new Date('2023-07-14')

  function fname(arr,startDate,endDate){
    return arr.filter(e=>{
        date=new Date(e.date)
        return date >=startDate && date<=endDate
    })
  }
  a=fname(dates,startDate,endDate)
  console.log(a)