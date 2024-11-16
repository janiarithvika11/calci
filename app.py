from flask import Flask, render_template, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
def calculate(expression):
    try:
        result = eval(expression)
        return str(result)
    except Exception as e:
        return str(e)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def handle_calculation():
    expression = request.json['expression']
    print('Received expression:', expression)  # Add this line
    result = calculate(expression)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
