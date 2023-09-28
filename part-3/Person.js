const MAX_NAME_LENGTH_TO_SHOW = 6;
// * Props:
//  * - name
//  * - age
//  * - hobbies: array, like ["cats", "bridge", "fighting the patriarchy"]
//  */

const Person = ({ name, age, hobbies }) => {
    const goVote = age >= 18 ? 'Please Go Vote!!' : 'Go To Sleep Kid';
    const hobbiesList = hobbies.map( hobby => <li>{ hobby }</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: { name.slice( 0, MAX_NAME_LENGTH_TO_SHOW) }</li>
                <li>Age: { age } </li>
                <ul>
                    Hobbies: { hobbiesList }
                </ul>
            </ul>
            <h3> { goVote } </h3>
        </div>
    )
}

