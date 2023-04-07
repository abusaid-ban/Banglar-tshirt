import React from 'react';
import Study from '../Study/Study';
import Career from '../Carrier/Career';
import Personality from '../Personality/personality';

const Myself = () => {
    return (
        <div>
            <h3>About MySelf</h3>
            <section className='flex'>

                <Personality></Personality>
                <Study></Study>
                <Career></Career>

            </section>
        </div>
    );
};

export default Myself;