import 'package:flutter/material.dart';
import 'package:product_arena_b/constants/global_variables.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Test2',
      theme: ThemeData(
        scaffoldBackgroundColor: GlobalVariables.secondaryColor,
        appBarTheme: const AppBarTheme(
          elevation: 0,
        ),
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text(''),
        ),
        body: const Center(
          child: Text(
            'Flutter Ahooooj Page',
          ),
        ),
      ),
    );
  }
}
