using System;

namespace APIFinancas
{
    public static class CalculoFinanceiro
    {
        public static double CalcularValorComJurosCompostos(
            double valorEmprestimo, int numMeses, double percTaxa)
        {
            if (valorEmprestimo <= 0 || numMeses <= 0 || percTaxa <= 0)
                throw new Exception("Parâmetros para cálculo inválidos!");

            return valorEmprestimo * Math.Pow(1 + (percTaxa / 100), numMeses); // Simulação de falha 
            //return Math.Round(
            //    valorEmprestimo * Math.Pow(1 + (percTaxa / 100), numMeses), 2);
        }
    }
}