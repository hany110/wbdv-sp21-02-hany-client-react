export default function apple(){
let gu = {
    si: 'da',
    cf: 'qe'
}
let uj = {
    cf: 'do',
    co: 'db',
    ...gu,
}
gu = {
    ...uj,
    cf: 'wh',
    co: 'nd'
}
return(
<div>
{gu.si}
</div>
)
}