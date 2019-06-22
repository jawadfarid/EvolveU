import React from "react"
import "./stats.css"
import TableauReport from 'tableau-react'

class StatComp extends React.Component {
    
    render() {
        let statboard;
        const options = {
            height: 600,
            width: 800,
            hideTabs: false,
            // All other vizCreate options are supported here, too
            // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
        };

        // Jawad conditional login
        if (this.props.loginid === "Jawad" && this.props.stats === "food") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/JawadsFoodSpendingCompared/FoodCompared?:embed=y&:display_count=yes&publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />
        } else if (this.props.loginid === "Jawad" && this.props.stats === "entertainment") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/JawadsEntertainmentSpendingCompared/Dashboard2?:embed=y&:display_count=yes&publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />
        } else if (this.props.loginid === "Jawad" && this.props.stats === "shopping") {
            
            statboard = <TableauReport
                url="https://public.tableau.com/views/JawadsShoppingSpendingCompared/ShoppingCompared?:embed=y&:display_count=yes&publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />
        } else if (this.props.loginid === "Jawad" && this.props.stats === "all") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/JawadOverallAVG/Dashboard1?:embed=y&:display_count=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />

            //Forest conditional login
        } else if (this.props.loginid === "Forest" && this.props.stats === "food") {
            statboard = <TableauReport
            url="https://public.tableau.com/views/ForestsFoodSpendingCompared/FoodCompared?:embed=y&:display_count=yes&publish=yes"
            query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
            options={options} />
        } else if (this.props.loginid === "Forest" && this.props.stats === "entertainment") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/ForestsEntertainmentSpendingCompared/Dashboard2?:embed=y&:display_count=yes&publish=yes"
                options={options} />
        } else if (this.props.loginid === "Forest" && this.props.stats === "shopping") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/ForestsShoppingSpendingCompared/ShoppingCompared?:embed=y&:display_count=yes&publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />
        } else if (this.props.loginid === "Forest" && this.props.stats === "all") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/ForestsOverallAVG/ForestOverallAVG?:embed=y&:display_count=yes&publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />

            // Joe's Conditional login
        } else if (this.props.loginid === "Joe" && this.props.stats === "food") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/JoesFoodSpendingCompared/FoodCompared?:embed=y&:display_count=yes&publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />
        } else if (this.props.loginid === "Joe" && this.props.stats === "entertainment") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/JoesEntertainmentSpendingCompared/Dashboard2?:embed=y&:display_count=yes&publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />
        } else if (this.props.loginid === "Joe" && this.props.stats === "shopping") {
            statboard = <TableauReport
                url="https://public.tableau.com/profile/forest.park#!/vizhome/JoesShoppingSpendingCompared/ShoppingCompared?publish=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options} />
        } else if (this.props.loginid === "Joe" && this.props.stats === "all") {
            statboard = <TableauReport
                url="https://public.tableau.com/views/JoessOverallAVG/ForestOverallAVG?:embed=y&:display_count=yes"
                query="?:embed=yes&:comments=no&:toolbar=yes&:refresh=yes"
                options={options}/>
        }

        return (
            <div className="stats">
                <h2>{statboard}</h2>
            </div>
        );
    }
}

export default StatComp