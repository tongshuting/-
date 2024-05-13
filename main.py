from flask import Flask, render_template, url_for

app = Flask(__name__)


# 设置静态文件夹和模板文件夹（如果需要不同于默认设置）
# app.static_folder = 'path/to/your/static'
# app.template_folder = 'path/to/your/templates'

# 路由定义



@app.route('/index')
def index():
    return render_template('index.html')
# @app.route('/kycg',methods=['GET','POST'])
#  def kycg():
#     return render_template('kycg.html')

@app.route('/teamintroduce',methods=['GET','POST'])
def teamintroduce():
    return render_template('teamintroduce.html')
@app.route('/teamintroduce/wj.hml',methods=['GET','POST'])
def wj():
    return render_template('tdcy/wj.html')
@app.route('/teamintroduce/dd.hml',methods=['GET','POST'])
def dd():
    return render_template('tdcy/dd.html')
@app.route('/teamintroduce/jtx.hml',methods=['GET','POST'])
def jtx():
    return render_template('tdcy/jtx.html')
@app.route('/teamintroduce/lq.hml',methods=['GET','POST'])
def lq():
    return render_template('tdcy/lq.html')
@app.route('/teamintroduce/lzy.hml',methods=['GET','POST'])
def lzy():
    return render_template('tdcy/lzy.html')
@app.route('/teamintroduce/md.hml',methods=['GET','POST'])
def md():
    return render_template('tdcy/md.html')
@app.route('/teamintroduce/xh.hml',methods=['GET','POST'])
def xh():
    return render_template('tdcy/xh.html')
@app.route('/teamintroduce/whm.hml',methods=['GET','POST'])
def whm():
    return render_template('tdcy/whm.html')
@app.route('/teamintroduce/sl.hml',methods=['GET','POST'])
def sl():
    return render_template('tdcy/sl.html')
@app.route('/teamintroduce/tjy.hml',methods=['GET','POST'])
def tjy():
    return render_template('tdcy/tjy.html')
@app.route('/teamintroduce/thy.hml',methods=['GET','POST'])
def thy():
    return render_template('tdcy/thy.html')
@app.route('/teamintroduce/xsy.hml',methods=['GET','POST'])
def xsy():
    return render_template('tdcy/xsy.html')
@app.route('/teamintroduce/ygy.hml',methods=['GET','POST'])
def ygy():
    return render_template('tdcy/ygy.html')
@app.route('/teamintroduce/zhc.hml',methods=['GET','POST'])
def zhc():
    return render_template('tdcy/zhc.html')
@app.route('/teamintroduce/zy.hml',methods=['GET','POST'])
def zy():
    return render_template('tdcy/zy.html')
@app.route('/teamintroduce/gg.hml',methods=['GET','POST'])
def gg():
    return render_template('tdcy/gg.html')






@app.route('/jxcg',methods=['GET','POST'])
def jxcg():
    return render_template('jxcg.html')
@app.route('/kyzh',methods=['GET','POST'])
def kyzh():
    return render_template('kyzh.html')
@app.route('/kyzh/2.hml',methods=['GET','POST'])
def kyzh1():
    return render_template('kyzh/kyzh1.html')
@app.route('/kyzh/3.hml',methods=['GET','POST'])
def kyzh2():
    return render_template('kyzh/kyzh2.html')
@app.route('/kyzh/4.hml',methods=['GET','POST'])
def kyzh3():
    return render_template('kyzh/kyzh3.html')
@app.route('/xsbs',methods=['GET','POST'])
def xsbs():
    return render_template('xsbs.html')
@app.route('/xssx',methods=['GET','POST'])
def xssx():
    return render_template('xssx.html')
@app.route('/work',methods=['GET','POST'])
def work():
    return render_template('work.html')
@app.route('/work/2.hml',methods=['GET','POST'])
def work_bk():
    return render_template('work/work_bk.html')
@app.route('/work/3.hml',methods=['GET','POST'])
def work_bk1():
    return render_template('work/work_bk1.html')
@app.route('/work/4.hml',methods=['GET','POST'])
def work_bk2():
    return render_template('work/work_bk2.html')
@app.route('/work/5.hml',methods=['GET','POST'])
def work_bk3():
    return render_template('work/work_bk3.html')

@app.route('/kycg/system',methods=['GET','POST'])
def system():
    return render_template('system.html')
@app.route('/kycg/system/2.hml',methods=['GET','POST'])
def system1():
    return render_template('kycg/system1.html')
@app.route('/kycg/system/3.hml',methods=['GET','POST'])
def system2():
    return render_template('kycg/system2.html')




@app.route('/kycg/project',methods=['GET','POST'])
def kycg():
    return render_template('kycg.html')
@app.route('/kycg/project/2.htm',methods=['GET','POST'])
def project1():
    return render_template('project1.html')
@app.route('/kycg/paper',methods=['GET','POST'])
def paper():
    return render_template('paper.html')
@app.route('/kycg/paper/2.hml',methods=['GET','POST'])
def paper1():
    return render_template('kycg/paper1.html')
@app.route('/xsbs/2.hml',methods=['GET','POST'])
def xsbs2():
    return render_template('xsbs/xsbs2.html')
@app.route('/xsbs/sheng1.hml',methods=['GET','POST'])
def sheng1():
    return render_template('xsbs/sheng1.html')
@app.route('/xsbs/sheng2.hml',methods=['GET','POST'])
def sheng2():
    return render_template('xsbs/sheng2.html')
@app.route('/xssx/1.hml', methods=['GET', 'POST'])
def xssx1():
        return render_template('xssx/xssx1.html')
@app.route('/xssx/2.hml', methods=['GET', 'POST'])
def xssx2():
        return render_template('xssx/xssx2.html')
@app.route('/xssx/3.hml', methods=['GET', 'POST'])
def xssx3():
        return render_template('xssx/xssx3.html')
@app.route('/xssx/4.hml', methods=['GET', 'POST'])
def xssx4():
        return render_template('xssx/xssx4.html')
# 添加更多路由...

if __name__ == '__main__':
    app.run(debug=True)