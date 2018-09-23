import * as types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
// var initialState = [
//     {
//         product : {
//             id: 1,
//             name: 'Iphone 6s Plus',
//             image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAQEBAQEBAQEBcQEBAOFRIQFhAOFRUXFxcYFxcYHSggGR0lGxYVIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi0lHx4vLS01LS0vLy0rLTctLSstLS0rKy4tLTctLS0tLS0tLS01LS0tLS0tKy0tLTU1LS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBBQYCBwj/xABKEAABBAADAgcIDwcEAwEAAAABAAIDEQQSIQUxEyI0QVFhcwZSU3GBkbKzBxQVIzIzQnJ0k6HBwtHSQ2KCkpSx0xYkovCDw+Gj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDBAIF/8QAIhEBAAICAQUAAwEAAAAAAAAAAAECAxEhBBIxQVEiYfAT/9oADAMBAAIRAxEAPwD7iiIgIiICIiAiLznHSEHpF5zjpCZx0hB6Rec46QmcdIQekWMw6QmYdIQZRYzDpCZh0hBlFjMOkJmHSEGUWMw6QmYdIQZRYzDpCZh0hBlERAREQEREBERAREQEREBU8diS3it+ERZO/KOah0nWvEeijcWqklbwzyT8F/m4ja+2/Og8S4YBpklcAGjMS/jkDxnd5FxWy/ZG2PiMScMx8jXXTJXwtEchGpyuBJFAE24Dcu12mIp4ZIS6hI0tuiaPMevWtF8n2H7EQgxMckuLa+GN2drGscHX1u565tNaG7cqj64dnM6v5WqODCxPvKbo1rHl81jUdYXoDDcK+ahwr42xPfTrdE0uc1viBe7zphDHHfHJJ6iB5hpfipTnavXuczq/laosRhGMBJIoC/ghW/bcfffYVr8fjGF0bc3wpGjcem/uVRJhdlMcM0rQb1DKFAdfSrrcHENBGweIBWHLCCH2rH3jfMntWPvG+ZTKHGiQxyCEsbMWO4IyAlglo5S4DUi6ukD2rH3jfMoMRwTHxMMTiZXFgLI3Pawhpdb3DRg0oE85AXnAMxYwrBM+E4zgqe9jXcFw9aHLYJbdXuvXcqHBbY8Ns36jE/5kG49qx943zJ7Vj7xvmVfZbcWA720/DvNjJ7WZJGAOfNne6+bdSvIIfasfeN8ye1Y+8b5lMiCAYVo+BcZ6W6DyjcfKpsNMXWHCnt0cBuPQR1H7isqEOAnaOd0TievK5o+8+dFXERFAREQEREBERAREQFUjAuTQfGfharaqR75O0/C1B6odASh0BEVQodATKOgIsoMUOgLWYyuFi3fD+2itotTjT79F8/zaE/cgvYjHsbIY8sr3BrXkRsc8Bri4CyBXyXeZePdAeCxH1T/yWYOVT9hB6U6vIKHugPBYj6p6e6A8FiPqn/kr6IKHugPBYj6p/wCSe6A8FiPqn/kr6IKHugPBYj6p/wCSe6A8FiPqn/kr6IKHugPBYj6p/wCSe6A8FiPqn/kr6INdNtVjGue+OdrWtLnOMT6a0CyTp0K0R78zs3f3aq+3+SYr6NL6tysu+OZ2bvSairSIigIiICIiAiIgIiICpRO1l6pa/wCLVdVGPfN2v/rYgkReVm1UZWV5tEHpavGfHRfP81gj+5Cj2j3TYLD4iHCzYhjJ5yBHGbJtxpuYgUyzoM1Wdykxo98j0+WL/mCC3DyqfsYPSnV1UYeVT9jB6U6vICIq2OxscLQ6Q0CcoPNYaXGzzaNKEzpHtCehQ3a5usCtPtVN+KLSQ11Agnm3jNr/AMFVkx7ZmGRvwXCVoOmuUkWOo5CR1Uosa6m3fypPsEv5r1pnNvjfwTnUPI+FTTu31p47VladstmubM4/y03+5+xXYMToOcajr0NfcvL3EraLDTYtZRVDb/JMV9Gl9W5WXH39g6Y3+k1Vtv8AJMV9Gl9W5WHcoZ2T/SYiriIigIiICIiAiIgIiICosaBwvXKT5crVeVIftO0/C1ARebWbVR6RebWbQfmj2QC87V2hwnwvbLh/46Aj/wDzyL6b7HfdaceyGGZ14rDObnJ0M0PwWydZ1Ad10ecLPsl+x7Ljpm4vBmMTOaI545XZA8N0a8Oo6gcUjnAHRrru4juDxezsfHNM+B7DEWHgXPJbI58ZrjNFjinX7FB9Uh5VP2MHpTq8qMPKp+xg9KdXlRhc73VzgskjdpwbY8U098yOQF48zSD1PC2u28OZcNiIx8uF7fIWkH7FxMmIz4bDEucXZHYd7yM+WOQUQa3DMGAdAC0pXfLDNfUaW8zgzLR+MkH2SE2reJ4zItPhyuHkfwlHy2POtbLOSwvuiWvd1ZnRscR179/7vjU2KkpuGa0kHgyW6Gqy8TTddlq07HL/AKahssPJxSecMBr9+Ql9faxX4HgGvkxjL430P7D7T1LVxSZd4+UXgXvNiOEeWgf4VLg5A+qNxxk8YftZbOZ3izX5b6FnaremRv4H1v0B/urK1EGKs6efpHV1dav4V+pHlHPSzdMTtBt/kmK+jS+rcrLmjh2HojfXnaq23+SYr6NL6tytH45nZu9JqPS0iIoCIiAiIgIiICIiAqPhO0/C1XlQP7TtPwtQYtLXi1m1Ue7S14tZtB6ta3Ej36L5/wBxWwta/EH36L5/3FBeh5VP2MHpTq6qUXKp+xg9KdXUBfLiC1+KwbwcwzSw3Qsi7AJ0HwSL0560or6iuG9kfZ7wYcZCKkiJs6av0yg+MWPI0c61xT+WmHUV3XfxoPbFwiswOjaHOSDv6SQxun5rcYqQmaMDQtY0NAAALtHVvutKpci7GsfZb8CV7JKu6DjxwdbsHMDzrd47FZJJXmqAGgF8ejkPWdN/UF32p4/vj5v6bEOMr+Djdl38xNRN4g3brFmr+UVt2nOKZpE3TMNzgN9XpX2eTQ6nZ8GRvBknOQHYl3eW0VHpz1V8/iu1ssdjWYaIvedG6NZoCXc3zfHVgbgFyZPOob0jTY4WroX01qbvnPOfGaHQFt8Nz+JfOe5LuvlxGIbhOBMr3ukkL2nIIo287hzjUC70JG8r6TEyv+2sLxMTy7cU7hV2/wAkxX0aX1blZPxzOzd6TVV29yTFfRpfVuVo/Hs7N3pNXlstoiKAiIgIiICIiAiIgLXP/a9r+Fq2K1sn7XtfwNQeLS14tLVRJaWvFrNoPdrXzn36L5/3FXbVCY+/RfP+4oNlFyqfsYPSnV1UouVT9jB6U6uoKe1cUIonPd8GiCbqgQf++VUdkYiLHYV7H++NJfFK1++sxr7Ko9XUtX7IUpdA6IGsrRMT4nD8Ik+xc97FO0ScTiYTfwHSAHre0j0vtW9ce8c2cNuomOoinpxm28O7BTzwON8FISCa1B1DurMBZ/eae+W9bMHYkEt4rHuncN15SwsvpzPAH8S2XsubJHCx4hooyR5HnTjZHD7eNH5GlczgsVlqyCQxlnnJYLIJ5hmDD/Cu3HfupEvGSkRZ2kE4ijBc6ybkLjve4my6/GeuhVWSK0O1Wy4p53Rxt0F2MovUnnLiebfzcy9PlygOc7NIQC1p1LABxS4CuMbJrmLj0Be9ntnBDzkjINtfPdNvSxGKzHcLJFaUueY1y8zPOnTdyewosKzNla17qzvcBnd4z8kfujzldjhnkijr0HpC5PY2ID6Ie/EO8JXFHioBrfJr410eDdxm62aN1uA/7S5r7meXZh1rhnb3JMV9Gl9W5Wj8ezs3+k1VdvckxX0aX1blaPx7Ozf6TV4dC2iIoCIiAiIgIiICIiAtXKfje1/A1bRamc/Hdt+BiCG1m1HaWqiW0tR2s2gktUZT79F8/wC4q1apSH3+L5/3FBt4uVT9jB6U6uKlFyqfsYPSnV1ByPd1i2BmUi3CwWc8sRY4ODfIb8Y6wuN9iqm7SkBcLdhnhpOnCtzMLS3roOsc2XqK6z2SMODHG63NcDbXtOrXN6joRrVaeML5UMRLHO2RjmxTRvEkTm6Mc/Tde7MN7TXi6e3FXux6+vk5ZmOp3Pp9h9kmFrtnyyGrhcyRpOlW4Md/xefsXxqLECiQ2y6Vgrpui4V0U148q7v2RO61k+yoGMGWXGvAlj1uIQuBkB/jDRXOCV82wbNWhp1DzkPM1xFX0kgXQ6SFv0kTWkxZ09REW1MOnZiZnPIY7JxiHyb3F/ysvRR0LunTcArcUIbWd2p3kvje4k89yDRMJhJg1obkZQqjHnd4gXjLu6vKrMGFy3nDZD0lohA/laCs7zrwxh0Ox549M7b3AcLOJcx/diY51nqAXb4IDLYG/d4gvlMmMLQWxMdLJvMcbnzAN3Elo4xG8UNL6KC+qbMrgYsu7g276u8ou65739a5Mke3VgnfCPb3JMV9Gl9W5WT8ezsn+k1VtvckxX0aX1blZPx7Oyf6TVk6lxERQEREBERAREQEREBabEn47tvwMW5WkxR+O7b/ANbEFfMlqLMs5lUS2s2osyzaCW1Scff4fn/cVYtVCff4fn/cUG8i5VP2MHpTq6qUXKp+xg9KdXUHBeyZtLMGYSCN885Be+OIOcYxxcpdl1Fnm5/La+YYTYmMmDnxxYqQbi6PDPe3Q6gG6drzL9A+57PfiLD525XvG+qIHmzFS4KExxsj4vEaGDIMraGgoWa061vTN2RqIctun7r90vzhjoJQ4CRrmuaMuWRpjc2tCHNskVXSa0UPCGMgh+S9LsA6jTdZ3E7uldf3YQh+KnfV++yHTn4zug3zc2vUuWxDQ0OLjlB+WOD41gXq/XffNS+vgiLViZY5bdvEL+Ew90+M8bvonuLtOp2rvOFM2XENOemysB1IZGS35we0lvlIXN4UxseHwTMZIHAh8kjRqP3TzLqtn90c4OebBcI0U3hcGWvGSuNbSTY3aePfz82WYiWepl13c9jHT8UyMdVXCZOBr5zBE11dRsdS73ZLXAOzEc1Bt0PFe/7PEvh+1NsYbESCNh4GLNQdiGFuXWuL0C70NhfTO4djYY2shMksZq5HO4jiatzQdN/RelC1w5a8OjBOpdJt7kmK+jS+rcrJ5Qzsn+k1VtvckxX0aX1blZPKGdk/0mrB2rqIigIiICIiAiIgIiIC0WMPx/bj1bFvVz+OPx/bj1bEFPMs2osyZlUTZkzKLMs2glzKrfv8Pz/uKycSAa1/v/bVQMlBxEIB+X17qKDpYuVT9jB6U6uKlFyqfsYPSnVxzgNSgyqW2ce3DwvlJFgU0Hned35+RRY3HVdOy1qOsgtGvUczRXWFwPdztrhp3Ma73nDhzB+9J8o+egPF1rSmOZnlJlz+Pnz573uOu46k62D4z/8AVym06L3UGuBduJLHXvoFvwvEcx8QVrFT4gjhY4ZXsu3PYx7mtrpIGnMotmtjxcRynjtBL2OvVgO8XYc0ac2l31r7GO0V4h87LE+UOEfHXGOWvCxxztH8TBp5RzLpdl4HDmnZfa7iARiMGabz1mrx2bsblrdn7NOY5xI0N3ytu43bhbr4w3cVxPMQXDUdLsjAFrsoc2KR3wXsp0M9nTOz5Dj06WdxNUvGfljW3Lb7PgxYLDkwmNaKyzGoZA0jeeKeexpXN5O22SyYkOkyN/cZbq/iIF+ZajZmymamTDCKQkFzoncV5HOC0g/zALqMLhxG2hflJd9pXyrzD6GKs+VfbvJMV9Gl9W5WDyhnZP8ASaq+3eSYr6NL6tysHlLOxf6TFm6V5ERQEREBERAREQEREBc5tE6z9uPVsXRrmdpHXEduPVMQUMyzmUVrNqoltZzKK14MtGqQTGtdOtVcPXtiKgPh83l/JScN1KGCS8TCP3/uKDq4eVT9jB6U6lx15dNOMPNqoouVT9jB6U6nxEWajpp06/YrXyS4zuhxL2te8E20WDTqLhu0Ol8/FJB0Jot43yebGvyCzrVO6Sao/bzr7ntDYomYRwYDnCrJAoGxZO/yar4j3R7EmwcroZWFvHcWON5XsLiczXbnDX86XZjmJZ22q4Db82GLsrrY9rmU6gA1tG7rpfWtjVUu5raZZiHOfQY5+e3bmPvXdzEWD1X4nddsTuAdtEGSI8FCBk4SVr25n3xsgLeMBW8WDu01XfyexpgRhmwwt4OZg5QRbpXEa8IBvGmlURzc96TnrW0blz2x2tWdQ5fD7QweHcJMdE52Dc3/AGzoiXtEThRJDNXuGotpOlEWLK63BdzuzXtjxeHlLIZ4xmc1wqWFzg7KS4W2yADVHStNV89xexsXG4bOfC/NM9whBIovINvZITlc3Lm5g4WdxJB6vuS7msbBFhMPNhQ2CNzzPUsZcXl1tdV7gWjdqBu1OkzzETuLMMNZ1qaO82aYCHcCQ4NPBuNucWub8kk62L3K4o4IGRtDWNaxo3NYA0C+oKRcEvpVjUKO3eSYr6NL6tynPKWdi/02KDbvJMV9Gl9W5TnlLOxf6bFHpfREUBERAREQEREBERAXK7UPGxHbj1TF1S5Lax4+I7YerYgoWlrxaWqiS1m1HaWgkzKGA/7iH5/3Fe7UOHP+5h+f9xQddFyqfsYPSnV1UcRhpeFdJHKxmdjGObJGZPgF5BBD218M9O5Y4PFeHg/p3/5kF9VsdgIJ25J4opmb8szGyC/E4KHg8V4eD+nf/mTg8V4eD+nf/mQXY2NaA1oDWtFNa0ABoG4ADcF6VDg8V4eD+nf/AJlWnxj43ZJMbgmPq8r48rqO40Z7QbdZVDg8V4eD6h/+ZODxXh4P6d/+ZBfRUODxXh4P6d/+ZODxXh4P6d/+ZBnbvJMV9Gl9W5TnlLOxf6bFSxWDxMsb43Tw5ZGOjdlgeDlcCDRMxo0egq5f+5Z2L/TYitgiIoCIiAiIgIiICIiAuH22XDFTtsgFzXAf+Ni7hc53VbLe+p4gXOaKe1upLRZBA56s2PF0IOfyHvimT94qKPFtI/LUL37YZ0qo9ZD3xTIe+Kxw7elOHb0oM5D3xUEbaxEJLjpIFNw7elU8dIN4OoNjxhB9HfvXlabYW34sQwNLg2VopzSavrW4Dh0hBlEtLQR4rPkfwZAkyO4Mu1Ako5SR0XS84PCMhZkYNN7nHV0jjvc8/Kcd5JU1qriI5797mjaOcSxOlI8REjftBQTQRBltaKbvDRoG3vAHMOeutSLywUAC7MQNSasnp00Xq0BEtLQFA0XimGzxcO8EdZeyv7FZnxcbPhOFnQNGpcegAbypNnQut0rxT5K4veRjcPHqSf8A4guoiKKIiICIiAiIgIiICIiChjNjYaY5pIWF3fi2uP8AE2iq/wDprB+CP1kv6lt0Qaj/AE1g/BH6yX9Sz/prB+CP1kv6ltkQad3czgz+yP1k36lj/S2C8EfLJMfxLcog0Z7ktnnXgBfTnl/Uph3O4UVTJBW4Cacfj1W2RBr/AHFw/eO+sl/UnuLh+9d9ZL+pbBEGv9xcP3jvrJf1KM9z+G72T66f9a2iINc3YeHHyX+WSY/3cs+4uH7x31kv6lsEQa73Ew/eu+sl/UnuJh+8d9ZL+pbFEFXCbPhi1jja087t7j43HVWkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==',
//             desc: 'Sản phẩm do Apple sản xuất',
//             price: 500,
//             inventory: 10,
//             rating: 4
//         },
//         quantity : 5
//     },
//     {
//         product : {
//             id: 3,
//             name: 'Oppo F5',
//             image: 'https://drop.ndtv.com/TECH/product_database/images/10272017105526AM_635_oppo_f5.jpeg',
//             desc: 'Sản phẩm do Đài Loan sản xuất',
//             price: 300,
//             inventory: 10,
//             rating: 3
//         },
//         quantity : 3
//     }
// ];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            index = findProductInCart(state,product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else {
                    state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state,product);
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state,product);        
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default :  return [...state];
    }
}

var findProductInCart = (cart,product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;