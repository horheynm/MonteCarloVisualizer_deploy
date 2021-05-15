import React from 'react'
import { Container } from 'react-bootstrap'


const Description = () => {
    return (

        <div>
            <h2>Description</h2>
            <Container>

                <h5>Here we present a project of approximating &pi; using Monte Carlo simulations . </h5>



            </Container>

            <h2>Tech Stacks</h2>
            <Container>

                <ol>
                    <h3>
                        <li>
                            Frontend
                      </li>
                    </h3>

                    <ul>
                        <li>
                            <h5>
                                React

                            </h5>
                        </li>
                    </ul>
                    <h3>
                        <li>
                            Backend

                        </li>
                    </h3>
                    <ul>
                        <li>
                            <h5>
                                Django

                            </h5>
                        </li>

                    </ul>
                    <h3>
                        <li>
                                API call

                        </li>
                    </h3>
                    <ul>

                        <li>
                            <h5>
                            Django Rest Framework (API call via axios from frontend)

                            </h5>
                        </li>
                    </ul>
                </ol>

            </Container>
            <hr style={{ margin: "20px", }}></hr>
        </div>

    )
}

export default Description