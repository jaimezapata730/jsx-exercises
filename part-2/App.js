const App = () => {
    return (
        <div>
            <Tweet 
            username="george123"
            name="George Lopez"
            date={ new Date().toDateString() }
            msg="#Im the number one!!"
            />

            <Tweet 
            username="theGoldenBoy818"
            name="Oscar De La Olla"
            date={ new Date().toDateString() }
            msg="Team Money Sucks!!!"
            />

            <Tweet 
            username="TheDoll"
            name="Tiffany Reds"
            date={ new Date().toDateString() }
            msg="Emiliooo Where R yaaa!!"
            />
        </div>
    )
}