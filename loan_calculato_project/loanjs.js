//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display = 'none';
    
    //show loader
    document.getElementById('loading').style.display = 'block';

    //show results after 2 sec
    setTimeout(calculateresults, 2000); 

    e.preventDefault();
});
function calculateresults(e){
    // console.log('calculating...');

    //ui variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthpay = document.getElementById('monthly-payment');
    const totalpay = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    //from amount field, we are getting the value inside the field
    const calculatedinterest = parseFloat(interest.value) /100 /12;
    const caluclatedpayment = parseFloat(years.value) *12;
    
    //computing monthly payment
    const x = Math.pow(1+calculatedinterest, caluclatedpayment);
    const monthly = (principal * x * calculatedinterest)/ (x-1);

    //check if number is finite
    if(isFinite(monthly)){
        monthpay.value = monthly.toFixed(2);
        totalpay.value = (monthly *caluclatedpayment).toFixed(2);
        totalinterest.value = ((monthly *caluclatedpayment) - principal).toFixed(2);

        //show results
        document.getElementById('results').style.display = 'block';

        //hide spinner
        document.getElementById('loading').style.display = 'none';

    }
    else{
        showerror('Please check your numbers');
        console.log('Please check the numbers');

        //hide loader
        document.getElementById('loading').style.display ='none';

        //hide results
        document.getElementById('results').style.display = 'none';
    }
    // e.preventDefault();
}
    function showerror(error){
        //create a div
         const errordiv = document.createElement('div');

         //get elements
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        //add a class
         errordiv.className = 'alert alert-danger';

        //create text node and append to div
         errordiv.appendChild(document.createTextNode(error));

        //insert error above heading
        card.insertBefore(errordiv, heading);

        //clear error after a particular amount of time
        setTimeout(clearerror, 3000)
    }
    //it is 3000 ms
function clearerror(){
    document.querySelector('.alert').remove();
}
   
