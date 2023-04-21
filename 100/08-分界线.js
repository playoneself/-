/*分界线
时间限制：1s 空间限制：32MB 限定语言：不限
题目描述：
电视剧《分界线》里面有一个片段，男主为了向警察透露案件细节，且不暴露自己，于是将报刊上的字剪切下来，剪拼成匿名信。
现在有一名举报人，希望借鉴这种手段，使用英文报刊完成举报操作。
但为了增加文章的混淆度，只需满足每个单词中字母数量一致即可，不关注每个字母的顺序。
解释：单词'on'允许通过单词'no'进行替代
报纸代表newspaper,  匿名信代表anonymousLetter, 求报纸内容是否可以拼成匿名信。
输入描述：
第一行输入newspaper内容，包括1-N个字符串，用空格分开
第二行输入anonymousLetter内容，包括1-N个字符串，用空格分开
1、newspaper和anonymousLetter的字符串由小写英文字母组成且每个字母只能使用一次
2、newspaper内容中的每个字符串字母顺序可以任意调整,但必须保证字符串的完整性(每个字符串不能有多余字母)
3、1<N<100 , 1<= newspaper.length, anonymousLetter.length <= 104
输出描述：
如果报纸可以拼成匿名信返回ture，否则返回false
示例1
输入：
ab cd
ab
输出：
true
示例2
输入：
ab ef
aef
输出：
false
示例3
输入：
ab bcd ef
cbd fe
输出：
true
示例4
输入：
ab bcd ef
cd ef
输出：
false */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let token1 = await readline()
    let token2 = await readline()
    let newspaperArr = token1.split(' ')
    let anonymouseLetterArr = token2.split(' ')
    let reg = true
    for(let i = 0; i < anonymouseLetterArr.length; i++){
        let strArr = anonymouseLetterArr[i].split('')
        strArr.sort()
        let flag = false
        for(let j = 0; j < newspaperArr.length; j++){
            let strnArr = newspaperArr[j].split('')
            strnArr.sort()
            if(strArr.join('') == strnArr.join('')){
                flag = true
                break
            }
        }
        if(!flag){
                reg = false
                break
            }
    }
    console.log(reg)
}()
