import body from "./body";
import footer from "./footer";
import header from "./header";
const home=async()=>{
return `
${header()}
${await body()}
$${footer()}
`
}
export default home;