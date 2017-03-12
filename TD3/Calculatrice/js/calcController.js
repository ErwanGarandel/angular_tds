/**
 * Created by Erwan on 12/03/2017.
 */
// la magie d'angular, normal aight !
var app = angular.module("app", []);

app.controller("Ctrl", ["$scope",
    function($scope) {

        $scope.output = "0";

        // Pour savoir si on entre dans un nouveau calcul
        // et quand concatener
        $scope.newNumber = true;

        // Garde l'opération en cours
        $scope.pendingOperation = null;

        // Joint à la vue pour montrer le signe de l'opération
        $scope.operationToken = "";

        // Le total en live and direct
        $scope.runningTotal = null;

        // Holds the number value of the string in the display output
        $scope.pendingValue = null;

        // Dis à calculate() ce qu'il faut faire quand on appuie encore   // sur le boutton egal
        $scope.lastOperation = null;

        // Constantes
        var ADD = "adding";
        var SUBTRACT = "subtracting";
        var MULTIPLY = "multiplying";
        var DIVIDE = "dividing";
        var MODULO = "moduloing";
        var POW = "powing";
        var ADD_TOKEN = "+";
        var SUBTRACT_TOKEN = "-";
        var MULTIPLY_TOKEN = "*";
        var DIVIDE_TOKEN = "/";
        var MODULO_TOKEN = "%";
        var POW_TOKEN = "^";

        /*
         * Se lance à chaque fois qu'un chiffre est cliqué.
         * Met à jour l'affichage et le flag new Number
         */
        $scope.updateOutput = function(btn) {
            if (($scope.output == "0" || $scope.newNumber)) {
                $scope.output = btn;
                $scope.newNumber = false;
            } else if (btn !== 'e') {
                if (btn == "." && $scope.output.toString().indexOf(".") !== -1) {} else
                    $scope.output += String(btn);
            }
            $scope.pendingValue = toNumber($scope.output);
        };

        /*
         * Se lance à chaque fois que le boutton "POW" est cliqué.
         * Si un nombre a été entré avant l'appui sur le boutton
         * "POW" la valeur va dans pendingValue,
         * powing devient la pendingOperation, et on attribue le signe.
         * Si aucun nombre n'a été entré mais qu'il y en a déjà un
         * sur l'affichage on pow la dernière valeur entrée
         * au total.
         */
        $scope.pow = function() {
            if ($scope.pendingValue) {
                if ($scope.runningTotal && $scope.pendingOperation == POW) {
                    $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                } else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                    $scope.runningTotal += $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == SUBTRACT) {
                    $scope.runningTotal -= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
                    $scope.runningTotal *= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
                    $scope.runningTotal /= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == MODULO)) {
                    $scope.runningTotal %= $scope.pendingValue;
                } else {
                    $scope.runningTotal = $scope.pendingValue;
                }
            }
            setOperationToken(POW);
            setOutput(String($scope.runningTotal));
            $scope.pendingOperation = POW;
            $scope.newNumber = true;
            $scope.pendingValue = null;
        };

        /*
         * Se lance à chaque fois que le boutton "+" est cliqué.
         * Si un nombre a été entré avant l'appui sur le boutton
         * "+" la valeur va dans pendingValue,
         * ADD devient la pendingOperation, et on attribue le signe.
         * Si aucun nombre n'a été entré mais qu'il y en a déjà un
         * sur l'affichage on additionne la dernière valeur entrée
         * au total.
         */
        $scope.add = function() {
            if ($scope.pendingValue) {
                if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                    $scope.runningTotal += $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == SUBTRACT) {
                    $scope.runningTotal -= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
                    $scope.runningTotal *= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
                    $scope.runningTotal /= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == MODULO)) {
                    $scope.runningTotal %= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == POW) {
                    $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                } else {
                    $scope.runningTotal = $scope.pendingValue;
                }
            }
            setOperationToken(ADD);
            setOutput(String($scope.runningTotal));
            $scope.pendingOperation = ADD;
            $scope.newNumber = true;
            $scope.pendingValue = null;
        };

        /*
         * Se lance à chaque fois que le boutton "-" est cliqué.
         * Si un nombre a été entré avant l'appui sur le boutton
         * "-" la valeur va dans pendingValue,
         * SUBSTRACT devient la pendingOperation, et on attribue le signe.
         * Si aucun nombre n'a été entré mais qu'il y en a déjà un
         * sur l'affichage on soustrait la dernière valeur entrée
         * au total.
         */
        $scope.subtract = function() {
            if ($scope.pendingValue) {
                if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
                    $scope.runningTotal -= $scope.pendingValue;
                    //pendingValue doit pouvoir prendre un nombre négatif
                } else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                    $scope.runningTotal += $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
                    $scope.runningTotal *= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
                    $scope.runningTotal /= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == MODULO)) {
                    $scope.runningTotal %= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == POW) {
                    $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                } else {
                    $scope.runningTotal = $scope.pendingValue;
                }
            }
            setOperationToken(SUBTRACT);
            setOutput(String($scope.runningTotal));
            $scope.pendingOperation = SUBTRACT;
            $scope.newNumber = true;
            $scope.pendingValue = null;
        };

        /*
         * Se lance à chaque fois que le boutton "*" est cliqué.
         * Si un nombre a été entré avant l'appui sur le boutton
         * "*" la valeur va dans pendingValue,
         * MULTIPLY devient la pendingOperation, et on attribue le signe.
         * Si aucun nombre n'a été entré mais qu'il y en a déjà un
         * sur l'affichage on multiplie la dernière valeur entrée
         * au total.
         */
        $scope.multiply = function() {
            if ($scope.pendingValue) {
                if ($scope.runningTotal && ($scope.pendingOperation == MULTIPLY)) {
                    $scope.runningTotal *= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == DIVIDE)) {
                    $scope.runningTotal /= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == MODULO)) {
                    $scope.runningTotal %= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
                    $scope.runningTotal -= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                    $scope.runningTotal += $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == POW) {
                    $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                } else {
                    $scope.runningTotal = $scope.pendingValue;
                }
            }
            setOperationToken(MULTIPLY);
            setOutput(String($scope.runningTotal));
            $scope.pendingOperation = MULTIPLY;
            $scope.newNumber = true;
            $scope.pendingValue = null;
        };

        /*
         * Se lance à chaque fois que le boutton "/" est cliqué.
         * Si un nombre a été entré avant l'appui sur le boutton
         * "/" la valeur va dans pendingValue,
         * DIVIDE devient la pendingOperation, et on attribue le signe.
         * Si aucun nombre n'a été entré mais qu'il y en a déjà un
         * sur l'affichage on divise la dernière valeur entrée
         * au total.
         */
        $scope.divide = function() {
            if ($scope.pendingValue) {
                if ($scope.runningTotal && ($scope.pendingOperation == DIVIDE)) {
                    $scope.runningTotal /= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == MULTIPLY)) {
                    $scope.runningTotal *= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == MODULO)) {
                    $scope.runningTotal %= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
                    $scope.runningTotal -= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                    $scope.runningTotal += $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == POW) {
                    $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                } else {
                    $scope.runningTotal = $scope.pendingValue;
                }
            }
            setOperationToken(DIVIDE);
            setOutput(String($scope.runningTotal));
            $scope.pendingOperation = DIVIDE;
            $scope.newNumber = true;
            $scope.pendingValue = null;
        };

        /*
         * Se lance à chaque fois que le boutton "%" est cliqué.
         * Si un nombre a été entré avant l'appui sur le boutton
         * "%" la valeur va dans pendingValue,
         * MODULO devient la pendingOperation, et on attribue le signe.
         * Si aucun nombre n'a été entré mais qu'il y en a déjà un
         * sur l'affichage on modulo la dernière valeur entrée
         * au total.
         */
        $scope.modulo = function() {
            if ($scope.pendingValue) {
                if ($scope.runningTotal && ($scope.pendingOperation == MODULO)) {
                    $scope.runningTotal %= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == MULTIPLY)) {
                    $scope.runningTotal *= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == DIVIDE)) {
                    $scope.runningTotal /= $scope.pendingValue;
                } else if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
                    $scope.runningTotal -= $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
                    $scope.runningTotal += $scope.pendingValue;
                } else if ($scope.runningTotal && $scope.pendingOperation == POW) {
                    $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                } else {
                    $scope.runningTotal = $scope.pendingValue;
                }
            }
            setOperationToken(MODULO);
            setOutput(String($scope.runningTotal));
            $scope.pendingOperation = MODULO;
            $scope.newNumber = true;
            $scope.pendingValue = null;
        };

        /*
         * Se lance quand le boutton "=" est cliqué.
         * Si un nombre a été entré avant le boutton "="
         * on réitère le calcul en se basant sur l'opération
         * en cours. ex (8+9 = "17", 2 = "19").
         * Si aucun nombre n'a été entré mais qu'il reste un nombre
         * dans l'affichage on repete la derniere operation
         * Par exemple, si 8+2 a été entré on continue d'ajouter
         * 2 à chaque fois que le boutton "=" est cliqué.
         */
        $scope.calculate = function() {
            if (!$scope.newNumber) {
                $scope.pendingValue = toNumber($scope.output);
                $scope.lastValue = $scope.pendingValue;
            }
            if ($scope.pendingOperation == ADD) {
                $scope.runningTotal += $scope.pendingValue;
                $scope.lastOperation = ADD;
            } else if ($scope.pendingOperation == SUBTRACT) {
                $scope.runningTotal -= $scope.pendingValue;
                $scope.lastOperation = SUBTRACT;
            } else if ($scope.pendingOperation == DIVIDE) {
                $scope.runningTotal /= $scope.pendingValue;
                $scope.lastOperation = DIVIDE;
            } else if ($scope.pendingOperation == MULTIPLY) {
                $scope.runningTotal *= $scope.pendingValue;
                $scope.lastOperation = MULTIPLY;
            } else if ($scope.pendingOperation == MODULO) {
                $scope.runningTotal %= $scope.pendingValue;
                $scope.lastOperation = MODULO;
            } else if ($scope.pendingOperation == POW) {
                $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                $scope.lastOperation = POW;
            } else {
                if ($scope.lastOperation) {

                    if ($scope.lastOperation == ADD) {
                        if ($scope.runningTotal) {
                            $scope.runningTotal += $scope.lastValue;
                        } else {
                            $scope.runningTotal = 0;
                        }
                    } else if ($scope.lastOperation == SUBTRACT) {
                        if ($scope.runningTotal) {
                            $scope.runningTotal -= $scope.lastValue;
                        } else {
                            $scope.runningTotal = 0;
                        }
                    } else if ($scope.lastOperation == MULTIPLY) {
                        if ($scope.runningTotal) {
                            $scope.runningTotal *= $scope.lastValue;
                        } else {
                            $scope.runningTotal = 0;
                        }
                    } else if ($scope.lastOperation == DIVIDE) {
                        if ($scope.runningTotal) {
                            $scope.runningTotal /= $scope.lastValue;
                        } else {
                            $scope.runningTotal = 0;
                        }
                    } else if ($scope.lastOperation == MODULO) {
                        if ($scope.runningTotal) {
                            $scope.runningTotal %= $scope.lastValue;
                        } else {
                            $scope.runningTotal = 0;
                        }
                    } else if ($scope.lastOperation == POW) {
                        if ($scope.runningTotal) {
                            $scope.runningTotal = Math.pow($scope.runningTotal, $scope.pendingValue);
                        } else {
                            $scope.runningTotal = 0;
                        }
                    }
                } else {
                    $scope.runningTotal = 0;
                }
            }
            setOutput($scope.runningTotal);
            setOperationToken();
            $scope.pendingOperation = null;
            $scope.pendingValue = null;
        };

        // reinitialise tout bah parceque c'est la fonction clear()

        $scope.clear = function() {
            $scope.runningTotal = null;
            $scope.pendingValue = null;
            $scope.pendingOperation = null;
            setOperationToken();
            setOutput("0");
        };

        $scope.erase = function() {
            if ($scope.output !== "0" && $scope.output !== "-0" && $scope.output.indexOf("n") == -1 && $scope.output) { //boutton effacer
                if (!($scope.pendingValue) && $scope.pendingOperation) {
                    $scope.pendingOperation = null;
                    $scope.operationToken = "";
                    $scope.pendingValue = $scope.runningTotal;
                    $scope.runningTotal = null;
                } else {
                    $scope.output = $scope.output.toString().split("");
                    $scope.pendingValue = $scope.pendingValue.toString().split("");
                    $scope.output.pop();
                    $scope.pendingValue.pop();
                    $scope.output = $scope.output.join("").toString();
                    $scope.pendingValue = $scope.pendingValue.join("").toString();
                }
            }
        }

        // Met à jour l'affichage et attend un nouveau nombre.

        setOutput = function(outputString) {
            $scope.output = outputString;
            $scope.newNumber = true;
        };

        // Montre le signe de l'opération pour que l'utilisateur
        // soit au courant quoi, la base.

        setOperationToken = function(operation) {
            if (operation == ADD) {
                $scope.operationToken = ADD_TOKEN;
            } else if (operation == SUBTRACT) {
                $scope.operationToken = SUBTRACT_TOKEN;
            } else if (operation == MULTIPLY) {
                $scope.operationToken = MULTIPLY_TOKEN;
            } else if (operation == DIVIDE) {
                $scope.operationToken = DIVIDE_TOKEN;
            } else if (operation == MODULO) {
                $scope.operationToken = MODULO_TOKEN;
            } else if (operation == POW) {
                $scope.operationToken = POW_TOKEN;
            } else {
                $scope.operationToken = "";
            }
        };

        // Convertis une string en nombre pour qu'on puisse calculer
        //  (en le multipliant par 1)

        toNumber = function(numberString) {
            var result = 0;
            if (numberString) {
                result = numberString * 1;
            }
            return result;
        };

    }
]);