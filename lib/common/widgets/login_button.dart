import 'package:flutter/material.dart';

class LoginButton extends StatelessWidget {
  const LoginButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Text(
              'resultPhrase',
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.w600,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: ElevatedButton(
                onPressed: null,
                style: ButtonStyle(
                  minimumSize: MaterialStateProperty.all(const Size(200, 40)),
                  backgroundColor:
                      MaterialStateProperty.all<Color>(const Colors.blue[300]),
                  foregroundColor:
                      MaterialStateProperty.all<Color>(const Colors.blue[900]),
                ),
                child: const Text(
                  'Restart Quiz',
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
