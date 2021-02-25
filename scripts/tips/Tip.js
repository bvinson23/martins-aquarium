export const Tip = (tipObj) => {
    return `<article class="tip-card">
    <ul>
        <li class="tip-details">${tipObj[0]}</li>
        <li class="tip-details">${tipObj[1]} inches</li>
        <li class="tip-details">${tipObj[2]}</li>
        <li class="tip-details">${tipObj[3]}</li>
    </ul>
</article>`
}