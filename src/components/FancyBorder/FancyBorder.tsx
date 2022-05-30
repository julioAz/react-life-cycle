import React from "react";

function FancyBorder(props: any){
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(){
    return (
        <FancyBorder color="aquablue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialaog-message">
                Thanks for visiting our spaceship
            </p>
        </FancyBorder>
    )
}

export default WelcomeDialog;