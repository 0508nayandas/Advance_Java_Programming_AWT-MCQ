from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_quiz', methods=['POST'])
def submit_quiz():
    data = request.json
    # Process the quiz data and store the result if necessary
    return jsonify({'status': 'success', 'score': data['score']})

if __name__ == '__main__':
    app.run(debug=True)
