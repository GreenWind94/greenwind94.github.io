var windDataPoints = [[55.078367,-101.953125,8,38,60],[12.9395,77.66081,7,75,180],[69.461937,18.2089,1,37,0],[39.6136589050293,-86.10665130615234,4.83,27,0],[-25.74485969543457,28.18782997131348,27.36,22,30],[38.43421936035156,-89.55036926269531,11.27,29,260],[51.5,3.613889932632446,12.87,18,170],[32.22174072265625,-110.9264831542969,24.14,30,210],[39.49615097045898,-88.1761474609375,9.66,28,100],[53.76667022705078,-2.716670036315918,4.83,13,60],[45.53929138183594,-122.3873062133789,9.66,22,250],[36.03311920166016,-86.78278350830078,0,26,0],[34.00260162353516,-85.04161071777344,8.05,23,80],[41.42787170410156,-74.16597747802734,11.27,28,250],[48.45000076293945,-2.033329963684082,9.66,17,210],[48.45000076293945,-2.033329963684082,9.66,17,210],[48.15000152587891,11.35000038146973,1.61,9,220],[49.35361099243164,11.14832973480225,8.05,12,190],[36.14474105834961,-5.352570056915283,8.05,20,70],[53.34399032592773,-6.267189979553223,4.83,14,170],[44.30905151367188,8.477149963378906,3.22,22,0],[52.53332901000977,-2.416670083999634,4.83,18,320],[50.80691146850586,-0.537819981575012,4.83,13,60],[51.45000076293945,-2.583329916000366,4.83,16,0],[43.09674072265625,12.38286018371582,14.48,17,360],[51.18333053588867,0.283329993486404,9.66,18,150],[50.34999847412109,8.766670227050781,3.22,14,140],[48.53332901000977,-2.783329963684082,9.66,17,210],[59.91324996948242,10.73892021179199,9.66,11,230],[53.43333053588867,10.36666965484619,3.22,13,100],[53.34999847412109,-2.733330011367798,3.22,14,0],[-36.86666870117188,174.7666625976562,25.75,14,100],[47.50310897827148,9.747099876403809,3.22,11,190],[-35.2834587097168,149.1280670166016,32.19,15,320],[54.65982818603516,-5.90857982635498,9.66,15,160],[40.93972015380859,24.40193939208984,12.87,14,30],[51.06930923461914,-1.795689940452576,9.66,15,190],[52.22779846191406,21.01272964477539,3.22,10,0],[50.96667098999023,3.983330011367798,8.05,18,180],[53.79647827148438,-1.547850012779236,8.05,12,300],[61.46667098999023,23.5,9.66,8,200],[19.28692054748535,-81.36705780029297,3.22,30,0],[52.9536018371582,-1.150470018386841,4.83,16,60],[45.52378082275391,9.589460372924805,9.66,16,10],[49.11911010742188,6.172689914703369,19.31,16,150],[45.43418884277344,10.99779033660889,8.05,16,360],[51.40555953979492,-3.482779979705811,3.22,17,290],[51.36666870117188,5,4.83,16,160],[51.76499938964844,5.518060207366943,9.66,16,150],[45.69868087768555,9.411649703979492,3.22,17,0],[55.46667098999023,8.449999809265137,11.27,16,230],[43.70011138916016,-79.41629791259766,11.27,23,130],[-32.32138824462891,-58.0755615234375,11.27,24,290],[51.31666946411133,4.86667013168335,4.83,16,160],[63.82841873168945,20.25971984863281,16.09,5,230],[48.20848846435547,16.37207984924316,3.22,12,120],[52.50500106811523,4.959720134735107,8.05,15,80],[46.25151062011719,15.16481971740723,0,10,0],[-34.93333053588867,138.6000061035156,12.87,11,30],[51.47972106933594,-3.706110000610352,3.22,17,290],[51.26667022705078,6.550000190734863,0,16,0],[43,-7.566669940948486,0,15,0],[50.98332977294922,9.716670036315918,3.22,13,190],[51.38764190673828,0.505460023880005,0,14,0],[48.34999847412109,12.13333034515381,8.05,9,260],[53.41057968139648,-2.977940082550049,3.22,14,0],[-42.91667175292969,147.3333282470703,20.92,12,310],[46.06193923950195,13.24221992492676,1.61,14,0],[37.97945022583008,23.71622085571289,12.87,17,10],[47.06666946411133,15.44999980926514,3.22,12,0],[48.5,14.5,6.44,11,110],[51.11666870117188,-0.183329999446869,3.22,14,170],[53.70291137695312,-1.633700013160706,8.05,12,300],[55.04433822631836,9.417409896850586,8.05,14,220],[50.54999923706055,6.25,11.27,14,160],[51.05010986328125,-114.0852890014648,37.01,13,170],[51.18341064453125,-114.4687118530273,33.8,13,150],[53.55014038085938,-113.4687118530273,28.97,13,180],[57.34999847412109,-2.083329916000366,4.83,11,250],[57.13333129882812,-2.099999904632568,4.83,11,250],[57.26667022705078,-2.366669893264771,4.83,11,250],[42.46023941040039,14.21020984649658,4.83,14,0],[42.36093902587891,14.13801002502441,4.83,14,0],[42.19543838500977,14.21980953216553,4.83,14,0],[43.25,76.94999694824219,11.27,13,140],[36.12749862670898,-5.453889846801758,8.05,20,70],[36.66400909423828,-4.561389923095703,0,20,0],[36.83813858032227,-2.459739923477173,3.22,24,240],[38.86666870117188,-1.083330035209656,4.83,17,260],[51.08335113525391,-115.3520584106445,33.8,13,150],[52.09331893920898,1.320420026779175,3.22,15,100],[37.08818817138672,-8.250300407409668,9.66,20,270],[37.18817138671875,-3.606669902801514,0,16,0],[38.84077835083008,0.105740003287792,3.22,22,0],[38.191650390625,-0.56580001115799,3.22,22,0],[38.34516906738281,-0.481489986181259,3.22,22,0],[38.39640045166016,-0.525499999523163,3.22,22,0],[36.68333053588867,-6.13332986831665,0,18,0],[36.51543045043945,-4.885829925537109,0,20,0],[51.58332824707031,6.516670227050781,9.66,16,150],[36.76419067382812,-2.614749908447266,3.22,24,240],[47.80970001220703,7.176990032196045,9.66,14,190],[-26.24333000183105,-48.6380615234375,3.22,19,230],[43.59815979003906,13.51008033752441,4.83,14,160],[43.46316146850586,13.54518032073975,4.83,14,160],[56.5,-2.716670036315918,3.22,14,290],[56.5,-2.966670036315918,3.22,14,290],[54.70000076293945,-6.199999809265137,12.87,14,180],[51.08332824707031,4.916669845581055,4.83,17,170],[51.31666946411133,5.083330154418945,4.83,16,160],[51.13333129882812,4.38332986831665,9.66,16,200],[40.89282989501953,16.76778030395508,9.66,13,320],[42.13615036010742,-0.408699989318848,4.83,16,240],[41.65605926513672,-0.877340018749237,12.87,18,120],[59.39387130737305,15.8388204574585,22.53,15,230],[58.34056091308594,8.58860969543457,11.27,14,240],[43.56666946411133,11.53332996368408,0,16,0],[48.95000076293945,2.25,4.83,19,190],[51.38333129882812,8.083330154418945,6.44,17,200],[59.65528106689453,12.58518028259277,20.92,13,220],[43.54111099243164,-5.664440155029297,9.66,19,210],[38.03332901000977,23.75,9.66,17,340],[-36.84999847412109,174.5500030517578,25.75,14,100],[48.14815902709961,17.10674095153809,0,11,0],[38.88333129882812,-6.966670036315918,0,19,0],[47.95000076293945,8.5,11.27,13,160],[49.00471878051758,8.38582992553711,3.22,14,210],[48.71667098999023,8.733329772949219,1.61,13,0],[49.48833084106445,8.464719772338867,6.44,13,150],[48.8377685546875,10.09329986572266,6.44,11,170],[47.66667175292969,9.600000381469727,1.61,13,0],[48.75,8.25,3.22,14,210],[49.49250030517578,9.77361011505127,8.05,14,220],[48.49143981933594,9.204270362854004,1.61,13,0],[48.23332977294922,9.883330345153809,3.22,9,120],[41.15612030029297,1.106870055198669,3.22,19,0],[41.38602066040039,2.075730085372925,12.87,20,350],[31.86667060852051,-116.6166687011719,9.66,23,200],[26.01667022705078,-111.3499984741211,11.27,33,70],[32.53332901000977,-117.0166702270508,9.66,23,200],[31,-114.8666687011719,11.27,32,340],[38.90882873535156,1.432960033416748,3.22,22,0],[-36.90000152587891,-60.28332901000977,14.48,16,340],[41.38879013061523,2.158989906311035,12.87,20,350],[41.31404876708984,2.014270067214966,12.87,20,350],[41.45003890991211,2.24741005897522,12.87,20,350],[41.61666870117188,2.083329916000366,0,19,0],[41.47977828979492,2.31879997253418,12.87,20,350],[41.38333129882812,2.049999952316284,12.87,20,350],[41.53332901000977,1.86667001247406,0,19,0],[41.53332901000977,2.450000047683716,12.87,20,350],[41.11772918701172,16.8511791229248,8.05,13,230],[40.88642883300781,17.16550064086914,9.66,13,320],[40.78593063354492,17.2371997833252,9.66,13,320],[40.85182952880859,17.12129020690918,9.66,13,320],[41.13113021850586,16.54528045654297,8.05,13,230],[41.04533004760742,16.88508987426758,8.05,13,230],[53.52188873291016,-1.396980047225952,8.05,15,290],[47.48455047607422,7.73445987701416,9.66,14,190],[42.70278167724609,9.449999809265137,4.83,16,210],[49.94805908203125,11.57833003997803,3.22,11,150],[48.04819107055664,10.88282012939453,6.44,13,240],[49.29999923706055,10.58333015441895,8.05,12,190],[48.70000076293945,10.80000019073486,6.44,11,170],[48.07709884643555,11.97062969207764,8.05,9,260],[48.26559829711914,10.98460960388184,3.22,12,220],[48.07709884643555,11.65812015533447,3.22,11,280],[48.40000152587891,13.31667041778564,6.44,13,30],[47.96268844604492,12.59230995178223,6.44,12,180],[-37.68611145019531,176.1666717529297,22.53,14,120],[-38.13874053955078,176.2451629638672,12.87,7,160],[49.05797958374023,-122.252571105957,12.87,20,210],[50.01633834838867,-125.2445907592773,11.27,18,100],[49.14398956298828,-122.9067993164062,11.27,16,240],[49.88307189941406,-119.4856796264648,9.66,18,330],[49.21939086914062,-122.6019287109375,12.87,20,210],[49.20677947998047,-122.9109191894531,11.27,16,240],[41.46667098999023,2.083329916000366,0,19,0],[49.31636047363281,-123.0693435668945,11.27,16,240],[49.22119140625,-122.6896514892578,12.87,20,210],[49.24132919311523,-124.8028030395508,9.66,17,100],[53.91659927368164,-122.7530136108398,19.31,21,190],[45.66677093505859,-72.14910125732422,16.09,25,240],[49.24966049194336,-123.1193389892578,11.27,16,240],[48.43294143676758,-123.3693008422852,12.87,14,230],[49.01636123657227,-122.8025970458984,8.05,15,200],[43.75,7.433330059051514,11.27,20,330],[52.13459014892578,-0.466320008039475,8.05,22,110],[39.90750122070312,116.3972320556641,3.22,16,90],[54.58332824707031,-5.933330059051514,9.66,15,160],[54.41822814941406,13.43348979949951,6.44,12,240],[51.40000152587891,-1.316669940948486,1.61,14,180],[51.45624923706055,-0.971130013465881,3.22,18,0],[52.52436828613281,13.41053009033203,3.22,14,120],[46.75,7.61667013168335,1.61,14,220],[43.21667098999023,27.91666984558105,17.7,13,360],[47.06666946411133,21.93333053588867,11.27,7,110],[52.46667098999023,-1.916669964790344,4.83,18,320],[53.70000076293945,-2.466670036315918,4.83,12,240],[42.01667022705078,23.10000038146973,6.44,11,0],[41.40000152587891,23.2166690826416,6.44,13,360],[41.56666946411133,23.73332977294922,6.44,13,360],[46.14500045776367,12.22138977050781,0,16,0],[56.20999145507812,15.27602005004883,9.66,12,250],[56.17060089111328,14.8618803024292,9.66,12,250],[48.84999847412109,2.533329963684082,4.83,19,190],[37.038330078125,27.42917060852051,12.87,19,360],[58.84999847412109,5.733329772949219,9.66,13,290],[57.65893173217773,12.117919921875,16.09,13,220],[44.47866821289062,11.6381196975708,12.87,17,210],[44.49380874633789,11.33874988555908,12.87,17,210],[43.34333038330078,17.80805969238281,8.05,14,170],[43.84864044189453,18.3564395904541,3.22,9,0],[50.71667098999023,-1.88332998752594,3.22,13,350],[51.41667175292969,-0.75,3.22,18,0],[53.79391098022461,-1.752060055732727,8.05,12,300],[53.8679084777832,-1.90664005279541,8.05,12,300],[41.81666946411133,-6.75,3.22,15,null],[52.56666946411133,13.08333015441895,3.22,14,120],[-4.133059978485107,-38.24193954467773,22.53,26,80],[-29.9444408416748,-50.99193954467773,12.87,22,70],[-23.54750061035156,-46.6361083984375,11.27,20,180],[53.07516098022461,8.807769775390625,3.22,11,180],[45.58358001708984,10.15717029571533,9.66,16,10],[48,-4.099999904632568,4.83,16,210],[48.46667098999023,-2.516669988632202,9.66,17,210],[49.15206909179688,-125.9031524658203,11.27,17,200],[45.5247802734375,10.22727012634277,9.66,16,10],[41.31182861328125,16.29076957702637,8.05,13,230],[52.04172134399414,-0.755829989910126,8.05,22,110],[51.70000076293945,-0.699999988079071,4.83,17,190],[51.59999847412109,-0.63332998752594,4.83,17,190],[51.81666946411133,-0.800000011920929,3.22,15,130],[51.70000076293945,-0.600000023841858,4.83,17,190],[52.08332824707031,-0.716669976711273,8.05,22,110],[-34.61315155029297,-58.37723159790039,14.48,19,150],[-34.72027969360352,-58.26943969726562,14.48,19,150],[-38,-57.54999923706055,11.27,16,340],[13.15472030639648,123.7541732788086,3.22,25,300],[42.5,27.4666690826416,11.27,13,300],[42.34999847412109,-3.700000047683716,4.83,15,50],[53.59999847412109,-2.299999952316284,0,12,0],[59.74393844604492,10.20448970794678,3.22,13,230],[59.65000152587891,9.649999618530273,3.22,14,260],[36.41915130615234,-6.149409770965576,9.66,21,270],[39.44609832763672,16.28829002380371,46.67,0,60],[38.42396926879883,15.89900016784668,3.22,19,0],[39.59500122070312,16.5177001953125,8.05,19,40],[39.33198928833008,16.18438911437988,20.92,19,360],[53.71667098999023,-2.083329916000366,8.05,12,300],[37.48773956298828,14.04496955871582,8.05,13,150],[52.58332824707031,-0.25,4.83,17,140],[52.20000076293945,0.116669997572899,4.83,16,130],[52.66667175292969,0.166669994592667,9.66,16,120],[40.92601013183594,14.31083011627197,9.66,20,340],[40.90550994873047,14.18542957305908,9.66,20,340],[40.91442108154297,14.78874015808105,3.22,21,null],[43.4647216796875,-3.804440021514893,9.66,18,290],[43.34999847412109,-4.050000190734863,12.87,18,300],[-43.53332901000977,172.6333312988281,27.36,4,40],[51.47999954223633,-3.180000066757202,4.83,17,360],[51.85916900634766,-4.311669826507568,8.05,15,20],[51.67610931396484,-4.156670093536377,8.05,15,20],[36.46667098999023,-6.199999809265137,9.66,21,270],[41.72497940063477,1.826560020446777,0,19,0],[41.68333053588867,2.483330011367798,12.87,20,350],[42,2.283329963684082,4.83,18,340],[41.30604934692383,2.001230001449585,12.87,20,350],[37.59465026855469,14.98338031768799,3.22,20,270],[48.73332977294922,1.36667001247406,3.22,17,170],[45.96611022949219,14.29555988311768,3.22,10,280],[18.79027938842773,98.9816665649414,3.22,25,170],[35.6148796081543,139.581298828125,24.14,21,360],[13.08784008026123,80.27847290039062,0,25,0],[53.25,-2.116669893264771,0,12,0],[53.26667022705078,-2.5,0,12,0],[53.33332824707031,-2.233330011367798,0,12,0],[53.13333129882812,-2.366669893264771,0,12,0],[53.29999923706055,-2.366669893264771,0,12,0],[53.15000152587891,-2.200000047683716,0,12,0],[16.75,-93.11666870117188,0,31,0],[14.80000019073486,-89.55000305175781,0,33,0],[50.73305892944336,-1.775670051574707,3.22,13,350],[39.3113899230957,8.53499984741211,8.05,20,80],[38.98332977294922,-3.933330059051514,3.22,19,150],[54.59999847412109,-1.299999952316284,4.83,15,190],[54.57278060913086,-1.162780046463013,4.83,15,190],[25.54999923706055,-103.4333267211914,0,29,0],[54.65338134765625,-5.668950080871582,9.66,15,160],[54.53332901000977,-1.566669940948486,4.83,15,190],[53.27193832397461,-9.048890113830566,1.61,16,220],[40.09999847412109,-8.333330154418945,3.22,18,0],[51.88333129882812,0.899999976158142,3.22,15,100],[45.8095817565918,9.231240272521973,1.61,14,0],[38.08332824707031,-0.949999988079071,3.22,24,150],[40.30570983886719,-3.73294997215271,3.22,18,0],[40.41650009155273,-3.702559947967529,1.61,19,120],[39.46974945068359,-0.377389997243881,3.22,22,0],[38.59885025024414,-0.051389999687672,3.22,22,0],[53.32498168945312,-3.831480026245117,3.22,14,130],[-12.96667003631592,28.63332939147949,1.61,32,350],[37.88333129882812,-4.766670227050781,8.05,19,200],[50.41316986083984,-5.081860065460205,9.66,15,30],[54.61666870117188,-1.566669940948486,4.83,15,190],[52.04999923706055,-2.716670036315918,4.83,17,30],[52.40655899047852,-1.51216995716095,0,20,0],[45.34305953979492,14.40917015075684,3.22,17,350],[45.8144416809082,15.97797966003418,11.27,16,30],[46.70000076293945,20.14999961853027,0,9,0],[41.78332901000977,0.816670000553131,8.05,18,30],[37.50212860107422,15.08718967437744,3.22,20,270],[47.31666946411133,5.016670227050781,4.83,18,180],[41.98310852050781,2.82492995262146,4.83,18,340],[41.54026031494141,2.213059902191162,0,19,0],[41.48332977294922,2.183330059051514,0,19,0],[41.84999847412109,3.133330106735229,4.83,18,340],[41.34357070922852,2.036590099334717,12.87,20,350],[41.39316940307617,2.006890058517456,12.87,20,350],[54.31666946411133,-2.75,1.61,12,130],[54.89509963989258,-2.938199996948242,null,15,null],[49.19522094726562,16.60795974731445,9.66,12,30],[49.55923843383789,18.80231094360352,0,7,0],[60.59856033325195,15.07744979858398,16.09,13,230],[10.5,-66.91667175292969,12.87,33,250],[28.6357593536377,77.22444915771484,0,28,0],[55.64152145385742,12.08034992218018,12.87,12,230],[53.41667175292969,-1.899999976158142,0,12,0],[53.25,-1.416669964790344,8.05,15,290],[50.72359848022461,-3.527509927749634,3.22,14,150],[51.20930099487305,-4.113440036773682,3.22,17,290],[50.37152862548828,-4.143050193786621,9.66,16,240],[50.54999923706055,-3.466670036315918,9.66,16,240],[18.50012016296387,-69.98857116699219,4.83,30,0],[-6.214620113372803,106.8451309204102,8.05,25,210],[38.48199844360352,-90.74152374267578,4.83,29,350],[35.62664031982422,-120.6910018920898,19.31,22,200],[37.084228515625,-94.5132827758789,9.66,28,140],[33.95621109008789,-83.98796081542969,9.66,24,50],[40.32450866699219,-79.7011489868164,8.05,22,210],[33.07865905761719,-116.6019592285156,12.87,24,270],[40.9008903503418,-80.85675048828125,8.05,25,180],[42.7806396484375,-72.1417465209961,11.27,27,270],[50.87363052368164,0.011330000124872,3.22,14,170],[8.993599891662598,-79.51972961425781,0,28,0],[61.49911117553711,23.7871208190918,9.66,8,200],[34.14250946044922,-118.2550811767578,12.87,24,180],[32.83504867553711,-116.7664108276367,16.09,26,220],[51.36666870117188,-0.816670000553131,3.22,18,0],[39.68371963500977,-75.7496566772461,11.27,27,230],[44.08053970336914,-103.2310104370117,22.53,12,20],[39.11566162109375,-77.5635986328125,11.27,24,210],[45.64332962036133,14.86332988739014,6.44,11,280],[45.80397033691406,15.16886043548584,0,11,0],[44.31666946411133,23.79999923706055,8.05,14,190],[51.09999847412109,17.0333309173584,1.61,10,0],[54.95000076293945,-7.733329772949219,3.22,16,0],[51.38914108276367,0.548629999160767,0,14,0],[50.71667098999023,-2,3.22,13,350],[50.59999847412109,-2.450000047683716,3.22,13,350],[51.51667022705078,7.449999809265137,16.09,17,200],[43.53332901000977,6.466670036315918,4.83,17,360],[52.77917098999023,6.90693998336792,0,14,0],[52.99666976928711,6.5625,null,12,50],[52.72417068481445,6.990280151367188,0,14,0],[45.07049179077148,7.686820030212402,3.22,17,310],[53.72586822509766,-1.362560033798218,8.05,12,300],[25.25222015380859,55.27999877929688,14.48,31,60],[52.5,-2.083329916000366,4.83,18,320],[51.94667053222656,6.013889789581299,4.83,14,100],[-45.87416076660156,170.5036163330078,12.87,7,60],[-33.96667098999023,25.58333015441895,32.19,15,70],[55.76667022705078,-4.166669845581055,0,14,0],[55.93333053588867,-3.049999952316284,0,12,0],[50.8283805847168,-0.139469996094704,3.22,14,50],[50.85298919677734,0.564589977264404,9.66,17,80],[50.78332901000977,0.033330000936985,3.22,14,170],[50.76871109008789,0.284530013799667,3.22,14,170],[50.96947860717773,0.095890000462532,3.22,14,170],[51.04999923706055,0.150000005960465,3.22,14,170],[54.00489044189453,-0.438719987869263,3.22,14,340],[53.74459838867188,-0.335249990224838,3.22,15,0],[54.08306121826172,-0.19191999733448,3.22,14,340],[56.90552139282227,12.49118041992188,12.87,13,260],[51.44083023071289,5.477779865264893,3.22,15,140],[52.3985710144043,0.258109986782074,9.66,14,150],[41.15444183349609,24.13944053649902,12.87,14,30],[45.04676055908203,9.699370384216309,4.83,18,220],[43.95840072631836,12.73859977722168,null,15,null],[44.63496017456055,10.474289894104,12.87,17,210],[44.42707061767578,11.90762996673584,12.87,17,210],[44.76977157592773,10.78229999542236,12.87,17,210],[44.50886917114258,11.46982002258301,12.87,17,210],[53.78665924072266,-2.245330095291138,8.05,12,300],[51.28332901000977,-0.316670000553131,9.66,18,150],[52.25,-1.166669964790344,0,20,0],[54.66579055786133,-2.757570028305054,1.61,13,30],[51.66667175292969,-0.61667001247406,4.83,17,190],[51.90000152587891,-1.149999976158142,1.61,16,270],[53.98332977294922,-1.533329963684082,8.05,13,310],[51.96667098999023,1.350000023841858,3.22,15,100],[51.31903076171875,-0.558929979801178,3.22,18,0],[51.20000076293945,-0.800000011920929,1.61,14,180],[51.78966903686523,1.155969977378845,4.83,13,10],[56.06666946411133,-3.549999952316284,0,12,0],[52.70000076293945,-2.516669988632202,1.61,14,360],[51.62126922607422,0.305559992790222,8.05,17,90],[53.91667175292969,-1.816669940948486,8.05,12,300],[52.48332977294922,1.75,3.22,15,100],[51.86568069458008,-2.243099927902222,3.22,20,350],[53.81666946411133,-3.049999952316284,1.61,12,130],[51.73332977294922,-1.983330011367798,4.83,17,30],[51.37944030761719,-2.365560054779053,4.83,16,0],[51.11357116699219,-0.862450003623962,1.61,14,180],[50.38333129882812,-3.5,4.83,17,0],[53.70336151123047,-2.200700044631958,8.05,12,300],[53.52326965332031,-1.136909961700439,8.05,15,290],[53.19049835205078,-2.891890048980713,3.22,14,0],[51.07289886474609,-0.316199988126755,3.22,14,170],[55.16667175292969,-1.683330059051514,0,13,0],[53.54999923706055,-1.483330011367798,8.05,15,290],[51.37891006469727,0.5278599858284,8.05,17,90],[53.65000152587891,-1.783329963684082,8.05,12,300],[51.29848098754883,7.362899780273438,11.27,16,240],[38.95000076293945,20.75,0,16,0],[39.61999893188477,19.91971969604492,0,15,0],[60.21667098999023,24.66666984558105,8.05,11,230],[51.56666946411133,0.466670006513596,11.27,16,110],[51.73332977294922,0.483330011367798,11.27,16,110],[51.61666870117188,0.083329997956753,8.05,17,90],[51.48332977294922,0.333330005407333,8.05,17,90],[51.94194030761719,1.284369945526123,3.22,15,100],[52.02336883544922,0.242339998483658,11.27,16,110],[51.80007171630859,0.640380024909973,11.27,16,110],[51.61101150512695,0.523310005664825,0,14,0],[61.04999923706055,25.43333053588867,3.22,9,240],[60.11666870117188,24.43333053588867,8.05,11,230],[60.16952133178711,24.93544960021973,8.05,11,230],[60.29668045043945,25.01380920410156,9.66,9,230],[48.75896835327148,16.88203048706055,11.27,15,140],[55.98332977294922,-3.700000047683716,0,12,0],[56,-3.766669988632202,0,12,0],[55.80857849121094,12.3606595993042,12.87,12,230],[44.19987106323242,12.3991003036499,3.22,16,250],[49.75786972045898,0.37457001209259,8.05,18,120],[44.82677841186523,11.6207103729248,3.22,21,140],[56.08332824707031,-3.466670036315918,0,12,0],[56.20000076293945,-3.183330059051514,1.61,13,240],[48.65697860717773,9.220490455627441,1.61,13,0],[43.73075103759766,11.01961994171143,4.83,17,0],[52.50833129882812,5.474999904632568,null,14,80],[52.71083068847656,5.748610019683838,null,14,80],[41.62593841552734,15.9093599319458,3.22,14,320],[-26.81357955932617,27.81694984436035,35.4,14,60],[53.20000076293945,5.783329963684082,3.22,13,100],[45.96389007568359,12.65750026702881,9.66,16,30],[42.43099975585938,-8.644350051879883,1.61,19,220],[-26.2022705078125,28.04363059997559,27.36,22,30],[-26.10000038146973,27.76667022705078,27.36,22,30],[60.67451858520508,17.1417407989502,null,12,200],[52.11582946777344,6.522220134735107,3.22,13,120],[52.03332901000977,5.658329963684082,4.83,14,100],[52.20999908447266,5.96943998336792,4.83,14,100],[51.97249984741211,6.71943998336792,3.22,13,120],[52.09000015258789,6.15556001663208,4.83,14,100],[52.0525016784668,6.099999904632568,4.83,14,100],[53.23332977294922,8.800000190734863,3.22,11,180],[50.98332977294922,6.266670227050781,9.66,16,180],[41.91667175292969,3.166670083999634,3.22,18,0],[52.33000183105469,5.541669845581055,null,14,80],[46.23886871337891,14.35560989379883,3.22,10,280],[45.94499969482422,13.59778022766113,4.83,18,40],[52.01667022705078,4.708330154418945,3.22,16,0],[37.23088073730469,-3.655100107192993,0,16,0],[53.61666870117188,-2.150000095367432,0,12,0],[53.48094940185547,-2.237430095672607,0,12,0],[53.21250152587891,6.27361011505127,4.83,13,100],[20.45000076293945,-100.6166687011719,19.31,25,60],[20.91666984558105,-100.75,19.31,25,60],[52.38084030151367,4.636829853057861,8.05,15,80],[47.84999847412109,21.43333053588867,3.22,11,230],[57.48719024658203,12.07612037658691,16.09,13,220],[53.54999923706055,10,0,11,0],[51.26667022705078,-1.083330035209656,9.66,15,190],[51.28332901000977,-0.833329975605011,3.22,18,0],[51.06512832641602,-1.318699955940247,0,11,0],[51.25,-0.766669988632202,3.22,14,50],[51.20000076293945,-1.483330011367798,9.66,15,190],[51.33332824707031,-1.11667001247406,9.66,15,190],[50.96667098999023,-1.350000023841858,0,11,0],[51,-0.933329999446869,0,11,0],[65.1833267211914,25.35000038146973,28.97,7,270],[48.79999923706055,2.266669988632202,8.05,18,180],[-39.48332977294922,176.9166717529297,20.92,11,120],[-39.63809967041016,176.8491821289062,20.92,11,120],[56.13932037353516,8.973779678344727,11.27,13,210],[53.59999847412109,-1.450000047683716,8.05,15,290],[50.96667098999023,9.800000190734863,3.22,13,190],[50,8,16.09,16,170],[56.81647872924805,-5.112080097198486,3.22,11,110],[55.92667007446289,12.31091022491455,8.05,13,260]];