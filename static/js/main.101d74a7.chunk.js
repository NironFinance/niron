(this.webpackJsonpNIRON=this.webpackJsonpNIRON||[]).push([[0],{208:function(e,t,n){},221:function(e,t){},230:function(e,t){},248:function(e,t){},250:function(e,t){},266:function(e,t){},267:function(e,t){},332:function(e,t){},334:function(e,t){},366:function(e,t){},368:function(e,t){},369:function(e,t){},374:function(e,t){},376:function(e,t){},382:function(e,t){},384:function(e,t){},397:function(e,t){},409:function(e,t){},412:function(e,t){},417:function(e,t){},428:function(e,t){},431:function(e,t){},484:function(e,t,n){},485:function(e,t,n){},486:function(e,t,n){},487:function(e,t,n){},488:function(e,t,n){},489:function(e,t,n){"use strict";n.r(t);var a=n(11),s=n.n(a),r=n(197),i=n.n(r),c=n(3),o=n.n(c),u=n(13),l=n(14),p=(n(208),n(25)),d=n.n(p),b="0xD8EdD3A05ea0F6A3e7C647DAc3Fb7ca4Bd32D994",y=[{inputs:[{internalType:"contract IERC20",name:"_token",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amountSent",type:"uint256"}],name:"OnDistribute",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnReinvest",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnStake",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnUnstake",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnWithdraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!1,inputs:[],name:"distribute",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"staker",type:"address"}],name:"dividendsOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"profitPerShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"_startTime",type:"uint256"}],name:"setStartTime",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"stake",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"stakeValue",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"stakeValueAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"stakerPayouts",outputs:[{internalType:"int256",name:"",type:"int256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"startTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalDistributions",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalStaked",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"_blockNumber",type:"uint256"}],name:"totalStakedAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalStakers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"unstake",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],w="0x23a50FE32b1D29A86A4FddC5d61C9733f2A4Ed2A",m=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"ethAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"SwapedTokenForEth",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"isSwapEnabled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"isTaxActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isTaxless",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"minTokenBeforeSwap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"setMinTokenBeforeSwap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"pair",type:"address"}],name:"setPairAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_stakingPool",type:"address"}],name:"setStakingPool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_value",type:"bool"}],name:"setSwapEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_value",type:"bool"}],name:"setTaxActive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_taxFee",type:"uint256"}],name:"setTaxFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"_value",type:"bool"}],name:"setTaxless",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"stakingPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"taxFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"taxFeeTotal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalEthDistributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],h=n(1);var j=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(null),c=Object(l.a)(i,2),p=(c[0],c[1],Object(a.useState)()),w=Object(l.a)(p,2),m=(w[0],w[1],Object(a.useState)(0)),j=Object(l.a)(m,2),f=(j[0],j[1],Object(a.useState)(0)),v=Object(l.a)(f,2),x=(v[0],v[1],function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,T();case 15:s=t.sent,r(s[0]),e=s[0],null,window.ethereum.on("accountsChanged",(function(t){r(t[0]),e=t[0],O(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),k(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}()),O=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.balanceOf(e).call();case 6:s=t.sent,console.log("accountDetails",s),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){x(),setInterval((function(){x()}),1e3)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"Navbar_Main",children:[Object(h.jsx)("h1",{children:"Stake $CHR"}),Object(h.jsx)("span",{className:" wallet0",children:"Wallet: "}),Object(h.jsx)("span",{className:"wallet text-truncate",children:s})]})})};n(484),n(105);var f=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=(n[0],n[1]),r=Object(a.useState)(null),i=Object(l.a)(r,2),c=(i[0],i[1],Object(a.useState)()),p=Object(l.a)(c,2),j=(p[0],p[1],Object(a.useState)(0)),f=Object(l.a)(j,2),v=(f[0],f[1],Object(a.useState)(0)),x=Object(l.a)(v,2),O=x[0],T=x[1],k=Object(a.useState)(0),g=Object(l.a)(k,2),M=g[0],S=g[1],C=Object(a.useState)(0),N=Object(l.a)(C,2),D=N[0],_=N[1],A=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,R();case 15:r=t.sent,s(r[0]),e=r[0],null,window.ethereum.on("accountsChanged",(function(t){s(t[0]),e=t[0],E(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),F(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.stakeValue(e).call();case 6:return s=t.sent,console.log("stakeValue",s),T(s),t.next=11,a.methods.totalDistributions().call();case 11:return s=t.sent,console.log("totalDistributions",s),_(s),a=new n.eth.Contract(m,w),t.next=17,a.methods.balanceOf(e).call();case 17:s=t.sent,console.log("balanceOf",s),S(s),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),console.log("error",t.t0);case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){A(),setInterval((function(){A()}),1e3)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"Row1_Main",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-12 pb-3 col-sm-6 col-md-4",children:Object(h.jsxs)("div",{className:"Row1_innerDiv",children:[Object(h.jsx)("h4",{children:"$CHR Staked"}),Object(h.jsx)("h6",{children:O})]})}),Object(h.jsx)("div",{class:"col-12 pb-3 col-sm-6 col-md-4",children:Object(h.jsxs)("div",{className:"Row1_innerDiv",children:[Object(h.jsx)("h4",{children:"$CHR Wallet"}),Object(h.jsx)("h6",{children:M})]})}),Object(h.jsx)("div",{class:"col-12 pb-3 col-sm-6 col-md-4",children:Object(h.jsxs)("div",{className:"Row1_innerDiv",children:[Object(h.jsx)("h4",{children:"Total BNB Distribution"}),Object(h.jsx)("h6",{children:D})]})})]})})})})};n(485);var v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"sidebar_Main",children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)("span",{className:"piggy",children:" CHAIN "}),"RAIDER"]}),Object(h.jsx)("div",{className:"sidebar_inner",children:Object(h.jsxs)("a",{href:"http://",children:["  ",Object(h.jsx)("i",{class:"fas fa-home"}),Object(h.jsx)("p",{children:"Stake $CHR"})]})}),Object(h.jsxs)("div",{className:"sidebar_last_div",children:[Object(h.jsx)("hr",{className:"hrColor"}),Object(h.jsx)("div",{className:"lastDiv_1",children:Object(h.jsxs)("a",{href:"http://",children:[Object(h.jsx)("i",{class:"fab fa-telegram-plane"}),Object(h.jsx)("p",{children:"Telegram"})]})}),Object(h.jsx)("div",{className:"lastDiv_1",children:Object(h.jsxs)("a",{href:"http://",children:[" ",Object(h.jsx)("i",{class:"fab fa-twitter"}),Object(h.jsx)("p",{children:"Twitter"})]})}),Object(h.jsx)("hr",{className:"hrColor"})]})]})})};n(486);var x=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=(n[0],n[1]),r=Object(a.useState)(null),i=Object(l.a)(r,2),c=(i[0],i[1],Object(a.useState)()),p=Object(l.a)(c,2),j=(p[0],p[1],Object(a.useState)(0)),f=Object(l.a)(j,2),v=(f[0],f[1],Object(a.useState)(0)),x=Object(l.a)(v,2),O=x[0],T=x[1],k=Object(a.useState)(0),g=Object(l.a)(k,2),M=g[0],S=g[1],C=Object(a.useState)(0),N=Object(l.a)(C,2),D=N[0],_=N[1],A=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,R();case 15:r=t.sent,s(r[0]),e=r[0],null,window.ethereum.on("accountsChanged",(function(t){s(t[0]),e=t[0],E(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),F(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.totalStaked().call();case 6:return s=t.sent,console.log("accountDetails",s),S(s),t.next=11,a.methods.totalStakers().call();case 11:return s=t.sent,console.log("accountDetails",s),T(s),a=new n.eth.Contract(m,w),t.next=17,a.methods.totalSupply().call();case 17:s=t.sent,console.log("totalSupply",s),_(s),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),console.log("error",t.t0);case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){A(),setInterval((function(){A()}),1e3)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"Row2_Main",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-12 pb-3 col-sm-6 col-md-4",children:Object(h.jsxs)("div",{className:"Row2_innerDiv",children:[Object(h.jsx)("h4",{children:"Total $CHR Stakers"}),Object(h.jsx)("h6",{children:O})]})}),Object(h.jsx)("div",{class:"col-12 pb-3 col-sm-6 col-md-4",children:Object(h.jsxs)("div",{className:"Row2_innerDiv",children:[Object(h.jsx)("h4",{children:"Total $CHR Staked"}),Object(h.jsx)("h6",{children:M})]})}),Object(h.jsx)("div",{class:"col-12 pb-3 col-sm-6 col-md-4",children:Object(h.jsxs)("div",{className:"Row2_innerDiv",children:[Object(h.jsx)("h4",{children:" Total $CHR Supply"}),Object(h.jsx)("h6",{children:D})]})})]})})})})};n(487),n(488);var O=function(){var e,t=Object(a.useState)("Connect To Wallet"),n=Object(l.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(null),c=Object(l.a)(i,2),p=(c[0],c[1],Object(a.useState)()),j=Object(l.a)(p,2),f=(j[0],j[1],Object(a.useState)(0)),v=Object(l.a)(f,2),x=(v[0],v[1],Object(a.useState)(0)),O=Object(l.a)(x,2),T=O[0],k=O[1],g=Object(a.useState)(0),M=Object(l.a)(g,2),S=M[0],C=M[1],N=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,t.prev=1,!window.ethereum){t.next=9;break}return window.web3=new d.a(window.ethereum),t.next=6,window.ethereum.enable();case 6:n=!0,t.next=10;break;case 9:window.web3?(window.web3=new d.a(window.web3.currentProvider),n=!0):(n=!1,console.log("error","Metamask is not installed, please install it on your browser to connect."));case 10:if(!0!==n){t.next=20;break}return a=window.web3,new a.eth.Contract(y,b),t.next=15,_();case 15:s=t.sent,r(s[0]),e=s[0],null,window.ethereum.on("accountsChanged",(function(t){r(t[0]),e=t[0],D(t),console.log(t)}));case 20:return t.t0=console,t.next=23,window.web3.eth.getChainId();case 23:t.t1=t.sent,t.t0.log.call(t.t0,"web3.eth",t.t1),A(),t.next=31;break;case 28:t.prev=28,t.t2=t.catch(1),console.log("error","Error while connecting metamask");case 31:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.web3,new n.eth.Contract(y,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.prev=1,e.next=4,t.eth.getAccounts();case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error while fetching acounts: ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("accountDetails",e),n=window.web3,a=new n.eth.Contract(y,b),t.next=6,a.methods.dividendsOf(e).call();case 6:return s=t.sent,console.log("stakeValue",s),C(s),t.next=11,a.methods.totalDistributions().call();case 11:return s=t.sent,console.log("totalDistributions",s),a=new n.eth.Contract(m,w),t.next=16,a.methods.balanceOf(e).call();case 16:s=t.sent,console.log("balanceOf",s),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.log("error",t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,20]])})));return function(){return t.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.web3,n=new t.eth.Contract(y,b),e.next=5,n.methods.stake(T).send({from:s});case 5:a=e.sent,console.log("accountDetails",a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.web3,n=new t.eth.Contract(y,b),e.next=5,n.methods.unstake(T).send({from:s});case 5:a=e.sent,console.log("accountDetails",a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.web3,n=new t.eth.Contract(y,b),e.next=5,n.methods.withdraw(T).send({from:s});case 5:a=e.sent,console.log("accountDetails",a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){N(),setInterval((function(){N()}),1e3)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"Row1_Main",children:Object(h.jsx)("div",{class:" container",children:Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("div",{class:"col-12 mt-5 pb-3",children:Object(h.jsx)("div",{className:"inputComp_Main_container",children:Object(h.jsxs)("div",{className:"inputComp_Main",children:[Object(h.jsxs)("div",{className:"withdraw_Class",children:[Object(h.jsxs)("h5",{children:["Rewards: ",Object(h.jsx)("span",{children:S})," BNB"]}),Object(h.jsx)("button",{className:"btn ",onClick:F,children:"WithDraw"})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"inpo_Main",children:[Object(h.jsxs)("div",{className:"upperBtnPair",children:[Object(h.jsx)("button",{className:"btn btn-success",onClick:E,children:"STAKE"}),Object(h.jsx)("button",{className:"btn btn-success",onClick:R,children:"UNSTAKE"})]}),Object(h.jsx)("div",{className:"input_div",children:Object(h.jsx)("input",{className:"w-100",type:"text",name:"",id:"",onChange:function(e){k(e.target.value)}})}),Object(h.jsxs)("div",{className:"upperBtnPair",children:[Object(h.jsx)("button",{className:"btn btnclor",onClick:E,children:"STAKE"}),Object(h.jsx)("button",{className:"btn btnclor",onClick:R,children:"UNSTAKE"})]})]})]})})})})})})})};var T=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{class:"container-fluid fullWidth p-0 m-0",children:Object(h.jsxs)("div",{class:"row p-0 m-0",children:[Object(h.jsx)("div",{class:"col-0 sidebar p-0 m-0 col-md-2",children:Object(h.jsx)(v,{})}),Object(h.jsxs)("div",{class:"col-12 bodyy col-md-10",children:[Object(h.jsx)(j,{}),Object(h.jsx)(f,{}),Object(h.jsx)(x,{}),Object(h.jsx)(O,{})]})]})})})};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[489,1,2]]]);
//# sourceMappingURL=main.101d74a7.chunk.js.map