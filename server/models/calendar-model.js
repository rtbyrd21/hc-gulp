var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var CalendarSchema   = new Schema({

year: { 
January: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
February: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
March: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
April: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
May: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
June: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
July: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
August: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
September: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
October: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
November: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ],
December: [
  {
    day: String,
    title: String,
    summary: String,
    description: String,
    month: String
  }
      ]
}
});

var Calendar = mongoose.model('CalendarDat', CalendarSchema);



Calendar.find({}).exec(function(err, collection){
  if(collection.length === 0){
  Calendar.create({

'year': {    
'August': [
    {
      'day':'9', 
      'title':'Dave Ramsey\'s Financial Peace University', 
      'summary': 'Financial Peace University (FPU) is a biblically-based, life-changing program that teaches people how to make wise decisions with money. You will be empowered with the practical skills and confidence needed...', 
      'decription': 'cal desc'
    },
    {
      'day':'17', 
      'title':'Divorce & Beyond Seminar', 
      'summary': 'If you are separated from your spouse, going through a divorce or are divorced, we encourage you to seek support. We understand the feelings of guilt, rejection, fear, confusion, isolation,...', 
      'decription': 'cal desc two'
    },
    {
      'day':'19', 
      'title':'Faith and Finances', 
      'summary': 'A twelve-week course in basic budgeting and finance for those who do not have the resources for Dave Ramsey\'s Financial Peace University.  This course uses biblical and sound financial principles...', 
      'decription': 'cal desc three'
    },{
      'day':'21', 
      'title':'Faith and Finances', 
      'summary': 'A twelve-week course in basic budgeting and finance for those who do not have the resources for Dave Ramsey\'s Financial Peace University.  This course uses biblical and sound financial principles...', 
      'decription': 'cal desc three'
    },{
      'day':'21', 
      'title':'Healing Center Small Group Volunteer Opportunities', 
      'summary': 'Come learn more about the Healing Center, take a mini-tour, and then serve together in our warehouse. You will make a difference in the lives of our guests by sorting...', 
      'decription': 'cal desc three'
    },
          ],
  'September': [
    {
      'day':'9 sep', 
      'title':'sep title', 
      'summary': 'sep summ', 
      'decription': 'sep desc'
    }
          ]
}});
  }
});


module.exports = mongoose.model('CalendarDat',  CalendarSchema);
