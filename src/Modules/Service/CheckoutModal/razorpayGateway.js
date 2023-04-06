
const RazorPay = (props)=>{

    const loadRazorPay =async ()=>{
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onerror = ()=>{
            alert("Razorpay SDK failed to load. You might be offline");
        }
        script.onload = async ()=>{
            try{
                const url = "https://vediheal-backend.vercel.app/schedule";
                // const url = "http://localhost:5000/schedule";
                const data={};
                const options = {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
                const res = await fetch(url,options);
            }catch(error){
                alert(error);
            }
        }
        document.body.appendChild(script);
    }
    
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <div>razorPay</div>
            <br/>
            <button onClick={loadRazorPay} >Pay</button>
        </div>
    );
}

export default RazorPay;