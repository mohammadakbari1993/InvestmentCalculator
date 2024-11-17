import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Result({input}) {

    const resultsValue = calculateInvestmentResults(input);
    const initialInvestment = resultsValue[0].valueEndOfYear - resultsValue[0].interest - resultsValue[0].annualInvestment;
    console.log(resultsValue);

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsValue.map(value => { 
                    const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment;
                    const totalAmountInvestment = value.valueEndOfYear - totalInterest;
                    return (
                        <tr key={value.year}>
                            <td>{value.year}</td>
                            <td>{formatter.format(value.valueEndOfYear)}</td>
                            <td>{formatter.format(value.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvestment)}</td>
                        </tr>
                    );
                 })}
            </tbody>
        </table>
    );

}