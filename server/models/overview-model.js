var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;



var OverviewSchema   = new Schema({
	contents: String,
    page: String
});


var Overview = mongoose.model('OverviewData', OverviewSchema);

Overview.find({}).exec(function(err, collection){
  if(collection.length === 0){
  Overview.create({

'contents': '<h2>Overview</h2><p>The Market Place and Wear House at the Healing Center provide emergency food, personal care products, and clothing to families in need. Over 300 tons of food are distributed each year. The provision of emergency food and clothing also leads to opportunities to reach out to guests and inform them of other services that will help put their lives back on track.</p><h3>Key Programs</h3><ul><li>Prayer and Devotions: It is our desire to minister to the whole person and that includes spiritual support. Please join us in our group devotional time, better known as Food for Thought, in which we build relationships and encourage one another toward greater personal growth, gain hope and draw closer to God.</li><li>Assessments: Offer referrals and serve as an advocate by networking with community resources</li><li>Auto Clinic: Volunteers evaluate car problems and make minor repairs. Labor is free, and the car owner pays for any needed parts. Oil changes are performed at a reduced cost. All services are performed on Saturdays.</li><li>Auto Donation Program: Donated vehicles find new homes through this program.&nbsp;Recipients are eligible to apply if they have been actively participating at Vineyard Cincinnati or The Healing Center under the guidelines of the program for six months.</li><li>Health Care: Health care resources are currently limited to vision screening and eyeglasses, blood pressure/blood sugar screening, and annual health fairs for free mammograms, heart health screening, and osteoporosis screening.&nbsp;</li><li>Financial Counseling: Trained financial coaches are available to help people take the first steps in managing their money or getting out of debt.</li><li>Tax Preparation: Tax preparation is by appointment only on Thursdays (for 2014: January 30 through April 12) from 6:30-9:30pm and Saturdays from 9am-12noon. Call Healing Center for appointment.</li><li>Job Coaching: We provide job search assistance—including help with resumes, interviewing, and career planning. Limited job placement assistance is also available.</li><li>Kids ClubHouse: The Kids ClubHouse is a safe place for kids to sing, play, and enjoy having fun while parents meet with staff or attend classes at the Healing Center.</li></ul><h3>Ohio Benefit Bank</h3><p>The Healing Center is an <a href=\"http://ohiobenefits.org/\" target=\"_blank\">Ohio Benefit Bank</a> location. This program is a collaboration between the Governor\'s office, local food banks, and local community agencies to help eligible guests receive public assistance benefits. The Ohio Benefit Bank functions in the same spirit as the Healing Center - a one-stop shop with a focus on one-on-one care. Healing Center guests will sit with one of our counselors to apply for a variety of programs at one time, saving them trips to multiple agencies all over town. The programs range from FAFSA applications for college financial aid, and voter registration, to nutrition assistance, childcare vouchers, home energy assistance, and various medical coverage and support programs. In 2012, the Healing Center helped guests apply for benefits with an estimated value of $632,322!</p><h3>Veterans Services</h3><p>Veterans, and their families seeking support with housing needs, may be eligible for&nbsp;assistance. <a>Click here</a> for more information.</p>'
    
},{
'page': 'services'
}
);
   }
});


module.exports = mongoose.model('OverviewData',  OverviewSchema);