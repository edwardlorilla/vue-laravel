<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->

    <!-- Styles -->
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}"/>
</head>
<body id="sign-in">
<div id="app">
    <example-component></example-component>
</div>
<script type="text/javascript" src="{{mix('/js/app.js')}}"></script>

</body>
</html>
