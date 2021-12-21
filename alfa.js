module.exports = {

    Verificaemail: emails =>{       

    cont = 0;

    for (i=0; i< emails.lenght; i++)
    {
        console.log(i)
        
        if(emails[i] == '@' )
        {cont ++;}

    }
    if(cont == 0 || cont > 1)
    {
        return false;
    }        
   return true;     
    
    }
}