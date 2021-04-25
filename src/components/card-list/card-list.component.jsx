import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => {
    return(
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
            <div className="well well-sm">
                {
                    props.cartoons.map(cartoon => 
                  <Card key={cartoon.id} cartoon={cartoon}/>
                )}
              </div>
            </div>
          </div>
        </div>

)}