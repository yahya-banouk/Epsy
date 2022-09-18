package com.example.backend.model;

import lombok.*;


import java.math.BigDecimal;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Percentage implements IGrowthPercentage{
    private BigDecimal percentage;
}
