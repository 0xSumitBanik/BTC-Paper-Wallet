function $(id)
{
    return document.getElementById(id);
}
function togglePassphrase()
{
    var firstPass = $("passContent1");
    var secondPass = $("passContent2");
    // firstPass.type === "password" && secondPass.type === "password" ? firstPass.type = "text", secondPass.type = "text" : firstPass.type = "password", secondPass.type = "password"
    if(firstPass.type==="password" && secondPass.type==="password")
    {
        firstPass.type = "text"; secondPass.type = "text";
    }
    else
    {
        firstPass.type = "password"; secondPass.type = "password";
    }
}

function generateWallet()
{
    var firstPass = $("passContent1").value;
    var secondPass = $("passContent2").value;
    console.log(firstPass+" "+secondPass)
    if(firstPass === secondPass && firstPass!="" && secondPass!="")
    {
        //Visible Divs after generating wallet
        $("print-btn").style.display="block";
        $("show-brain-wallet").style.display = "block";
        
        //Generating Address and PrivateKeys
        let address = buidl.createP2PKH().addr;
        let privateKey = buidl.createP2PKH().pk;
        $("display-address").innerHTML="";
        $("qrcode-address").innerHTML="";
        new QRCode(document.getElementById("qrcode-address"), {
            text: address,
            width: 170,
            height: 170,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        $("display-address").appendChild(document.createTextNode(address));


        $("display-private-key").innerHTML="";
        $("qrcode-private-key").innerHTML="";
        new QRCode(document.getElementById("qrcode-private-key"), {
            text: address,
            width: 170,
            height: 170,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        $("display-private-key").appendChild(document.createTextNode(privateKey));
    }
    else  if(firstPass != secondPass)
    {
        alert("Password not same!");
    }

    else if(firstPass ===  '' && secondPass === '')
    {
        alert("Passphrase cannot be blank");
    }
}

function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  
  function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }
  
// Print Action
document.querySelector("#print-btn").addEventListener("click", function() 
    {
	window.print();
    });