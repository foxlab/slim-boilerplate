<?php

/* layout.html.twig */
class __TwigTemplate_acc3066cf00aa19bacf894ec92f7adbade70ffdefaea73c805c7b18700cc1231 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
    <head>
        <meta charset=\"utf-8\">
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo " | Site name</title>
        <meta name=\"description\" content=\"\">
        <meta name=\"author\" content=\"\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
        <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600' rel='stylesheet' type='text/css'>
        <link href=\"";
        // line 10
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFunction('asset')->getCallable(), array("/css/style__1.7.0.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" />
        <link rel=\"icon\" type=\"image/png\" href=\"images/favicon.png\" />
    </head>
    <body>
        ";
        // line 14
        $this->displayBlock('content', $context, $blocks);
        // line 15
        echo "        <script src=\"";
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFunction('asset')->getCallable(), array("/js/script__1.7.0.js")), "html", null, true);
        echo "\"></script>
        <script src=\"//localhost:35729/livereload.js\"></script>
    </body>
</html>";
    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        echo "";
    }

    // line 14
    public function block_content($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  59 => 14,  53 => 5,  44 => 15,  42 => 14,  35 => 10,  27 => 5,  21 => 1,);
    }
}
