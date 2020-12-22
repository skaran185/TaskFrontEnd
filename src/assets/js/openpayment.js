var deviceDataId ;
 $(document).ready(function() {
 // OpenPay.setSandboxMode(true);
  debugger

  OpenPay.setId('mwbprcew4i5gchtpt1hv')
 OpenPay.setApiKey('pk_9f0a060f9b3b454794ab1710f0fcd109');
//OpenPay.setId('m4a4pfp1znpinyomwp33')
//OpenPay.setApiKey('pk_5ea64809c1f84afb945450ee77b074f8');

// OpenPay.setApiKey('pk_1880645d39ec479baedb67cbece9d156');
 //deviceSessionId = OpenPay.deviceData.setup("ship", "Id");
 //OpenPay.setSandboxMode(false);


 debugger




 //OpenPay.setApiKey('pk_1880645d39ec479baedb67cbece9d156');
 // var deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
  });



    var cardTokenId="";
    var paymentmethodid;
    var email;
    var userid;
    var sendUrl="";
    //var amount;
    var description;
    var amount;
var installments=[]

     function createopenpaytoken(data,address){

        //  window.Mercadopago.clearSession();
            //  var $form=data;
debugger
amount=data.Amount
email=data.email
userid=data.UserId
description=data.Description;
paymentmethodid=data.paymentMethodId;
if(address.City==null){
  address.City="cdmx"
}
              var $form=data={
                "card_number":data.cardNumber,
                "holder_name":data.cardholderName,
                "expiration_year":data.cardExpirationYear%100,
                "expiration_month":data.cardExpirationMonth,
                "cvv2":data.securityCode,
                "address":{
                   "city":"Querétaro",
                   "line3":address.Street2,
                   "postal_code":address.Pincode,
                   "line1":address.Street,
                   "line2":address.Street1,
                   "state":address.StateName,
                   "country_code":"MX"
                }
              }
              window.OpenPay.token.create($form, SuccessCallback, ErrorCallback);
             return false;

     }
     function SuccessCallback(response) {
       debugger
      //  alert('successfns');
       // var content = '', results = document.getElementById('resultDetail');
       /// content += 'Id tarjeta: ' + response.data.id+ '<br />';
       /// content += 'A nombre de: ' + response.data.holder_name + '<br />';
       // content += 'Marca de tarjeta usada: ' + response.data.brand + '<br />';
       // results.innerHTML = content;
     //  var address1=address
    //   var form ;
      // form.token=response.id
      //  cardTokenId=response.id;
        amount=amount;
        email=email;
        userid=userid;
        description=description;
        paymentmethodid=paymentmethodid;
        localStorage.setItem("payId",response.data.id)
       var  token_id = response.data.id;
    //    var chargeRequest = {
    //     'source_id' : token_id,
    //     'method' : 'card',
    //     'amount' : amount,
    //     'description' : description,
    //     'device_session_id' : 456,
    //     'customer' : {
    //          'name' : localStorage.getItem('UserName')?localStorage.getItem('UserName'):"",
    //          'last_name' : '',
    //          'phone_number' : address.PhoneNo,
    //          'email' : email
    //     }
    //  }
     debugger
   //  OpenPay.setApiKey('sk_62e0356902d34829892e0f2bc06fb557');
      // window.OpenPay.customers.charges.create(chargeRequest, function(error, charge) {
      //   debugger
      //     });
      $.ajax({
         // url:"https://psapsolutions.com/api/payment/mercadoPayment",
 // url:"https://localhost:44343/api/openpay/getActionData",
//  url:"http://api.sathfere.com/api/openpay/getActionData",
  url:"https://psapsolutions.com/api/openpay/getActionData",



          method:'GET',
          data:{token: token_id,
          amount:amount,
          email:email,
          paymentmethodid:paymentmethodid,
          userid:userid,
          description:description,
          },
          crossDomain: true,
          contentType: 'application/json; charset=utf-8',
          success:function(data){
            debugger

//alert('success')
              //alert(data.StatusDetail)
              localStorage.setItem("PaymentId",data.card.brand);
              location.href=data.payment_method.url

              //localStorage.setItem("PaymentStatus",data.StatusDetail);
             // doSubmit = false;
          },
          error:function(err){
alert(err)
localStorage.setItem("PaymentStatus","Payment Failed.Try Again");

          }
       })

    }

    function ErrorCallback(response) {
      debugger
      if(!response.data.description)
      {
      alert("Card verification failed")
      }
      else
      {
        alert(response.data.description );
      }
        window.location.reload()

    }
    function getpaymentmethod(cardnumber){
      debugger

      Mercadopago.getPaymentMethod({
        "bin": getBin(cardnumber)
    }, setPaymentMethodInfo);

      }

      function setPaymentMethodInfo(status, response) {
        if (status == 200) {
            const paymentMethodElement = document.querySelector('input[name=paymentMethodId]');
            if (paymentMethodElement) {
              paymentmethodid=response[0].id;
                paymentMethodElement.value = response[0].id;

            } else {
                const input = document.createElement('input');
                input.setattribute('name', 'paymentMethodId');
                input.setAttribute('type', 'hidden');
                input.setAttribute('value', response[0].id);
                form.appendChild(input);
            }
        } else {
            //alert(`payment method info error: ${response}`);
        }
    };

    function emicreateopenpaytoken(data,address){

      //  window.Mercadopago.clearSession();
          //  var $form=data;
installments=data
debugger
amount=data.Amount
email=data.email
userid=data.UserId
description=data.Description;
paymentmethodid=data.paymentMethodId;
if(address.City==null){
address.City="cdmx"
}
            var $form=data={
              "card_number":data.cardNumber,
              "holder_name":data.cardholderName,
              "expiration_year":data.cardExpirationYear%100,
              "expiration_month":data.cardExpirationMonth,
              "cvv2":data.securityCode,
              "address":{
                 "city":"Querétaro",
                 "line3":address.Street2,
                 "postal_code":address.Pincode,
                 "line1":address.Street,
                 "line2":address.Street1,
                 "state":address.StateName,
                 "country_code":"MX"
              }
            }
            window.OpenPay.token.create($form, EmiSuccessCallback, ErrorCallback);
           return false;

   }
   function EmiSuccessCallback(response) {
    debugger
   //  alert('successfns');
    // var content = '', results = document.getElementById('resultDetail');
    /// content += 'Id tarjeta: ' + response.data.id+ '<br />';
    /// content += 'A nombre de: ' + response.data.holder_name + '<br />';
    // content += 'Marca de tarjeta usada: ' + response.data.brand + '<br />';
    // results.innerHTML = content;
  //  var address1=address
 //   var form ;
   // form.token=response.id
   //  cardTokenId=response.id;
     amount=amount;
     email=email;
     userid=userid;
     description=description;
     paymentmethodid=paymentmethodid;
     localStorage.setItem("payId",response.data.id)
    var  token_id = response.data.id;
 //    var chargeRequest = {
 //     'source_id' : token_id,
 //     'method' : 'card',
 //     'amount' : amount,
 //     'description' : description,
 //     'device_session_id' : 456,
 //     'customer' : {
 //          'name' : localStorage.getItem('UserName')?localStorage.getItem('UserName'):"",
 //          'last_name' : '',
 //          'phone_number' : address.PhoneNo,
 //          'email' : email
 //     }
 //  }
  debugger
//  OpenPay.setApiKey('sk_62e0356902d34829892e0f2bc06fb557');
   // window.OpenPay.customers.charges.create(chargeRequest, function(error, charge) {
   //   debugger
   //     });
   $.ajax({
      // url:"https://psapsolutions.com/api/payment/mercadoPayment",
//url:"https://localhost:44343/api/openpay/getActionDataEmi",
//url:"http://api.sathfere.com/api/openpay/getActionData",
url:"https://psapsolutions.com/api/openpay/getActionData",



       method:'GET',
       data:{token: token_id,
       amount:amount,
       email:email,
       paymentmethodid:paymentmethodid,
       userid:+localStorage.getItem('UserId'),
       description:description,
       installmentRate:installments.installmentRate,
       installmentamount:installments.installmentamount,
       installments:installments.installments
       },
       crossDomain: true,
       contentType: 'application/json; charset=utf-8',
       success:function(data){
         debugger

//alert('success')
           //alert(data.StatusDetail)
           localStorage.setItem("PaymentId",data.card.brand);
           location.href=data.payment_method.url

           //localStorage.setItem("PaymentStatus",data.StatusDetail);
          // doSubmit = false;
       },
       error:function(err){
alert(err)
localStorage.setItem("PaymentStatus","Payment Failed.Try Again");

       }
    })

 }
      export { createopenpaytoken,getpaymentmethod,emicreateopenpaytoken};




