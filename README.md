# Custom Error POC 


The purpose of creating this repo is to Create a custom Error Object which could take the Message and Error code so we coiuld manage the Erro Handling in Single threaded Language like Javascript 

```

class AppError extends Error{
    
constructor(message,statusCode){
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
}
};

```

>TODO

1. Singleton Pattern for Better Memory Managment 
2. Creating Garbage Collection Event in the POC